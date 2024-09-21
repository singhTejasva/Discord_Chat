import { ModeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="text-3xl font-bold ">
      <p>dashboard</p>
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle />
    </div>
  );
}
