import { ModeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl font-bold ">
      <p>aysu</p>
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle />
    </div>
  );
}
