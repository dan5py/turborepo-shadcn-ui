import ShotsWidget from "@/components/widgets/ShotsWidget";
import { Button } from "@ui/components/ui/button";

export default function Page() {
    return (
      <div className="flex w-full h-full gap-4 p-12 wrapper_under_header">
        <div className="flex flex-col w-64 gap-2 h-fir">
          <Button variant="secondary">Главная</Button>
        </div>
        <ShotsWidget />
      </div>
    );
}
