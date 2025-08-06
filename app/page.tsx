import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="justify-center">
      <h1>Hello, Next.js!</h1>
      <Button>Click me</Button>
      <div className="absolute top-1 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
