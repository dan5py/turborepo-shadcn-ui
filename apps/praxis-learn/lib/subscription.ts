import { getAuthSession } from "./auth";
import { prisma } from "./db";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const checkSubscription = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return false;
  }
  const userSubscription = await prisma.userSubscription.findUnique({
    where: {
      userId: session.user.id,
    },
  });
  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
