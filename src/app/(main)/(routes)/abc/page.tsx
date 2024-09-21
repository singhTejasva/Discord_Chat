import { ModeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function ABC() {
  return (
    <div className="text-3xl font-bold ">
      <p>ABC</p>
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle />
    </div>
  );
}
