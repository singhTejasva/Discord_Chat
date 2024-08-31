import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl font-bold ">
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
