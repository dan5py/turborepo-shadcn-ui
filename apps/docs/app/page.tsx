import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col">
        <Button>Click me</Button>
        <Label>Label</Label>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    </main>
  );
}
