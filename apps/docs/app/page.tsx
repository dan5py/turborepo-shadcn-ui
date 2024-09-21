"use client";
import { Button } from "@repo/ui/components/ui/button";
import { toast } from 'sonner'

export default function Page() {
  return (
    <main className="w-screen h-screen bg-background">
      <Button className="text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground" onClick={
        () => {
          toast("Hello world!");
        }
      }>Click me</Button>
    </main>
  );
}
