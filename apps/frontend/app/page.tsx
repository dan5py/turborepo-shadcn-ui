import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">App</h1>
      <Button>Click me</Button>
    </main>
  );
}
