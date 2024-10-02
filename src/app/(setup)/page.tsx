"server client";

import { initialProfile } from "@/lib/initial-profile";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();
  console.log(profile, "ayush@123------>>>");
  if (!profile) {
    redirect("/sign-in");
  }
  return (
    <div>
      Create a Server
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
