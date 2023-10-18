import { redirect } from "next/navigation";

export default async function ShotsPage() {
  return redirect('/shots/popular')
}
