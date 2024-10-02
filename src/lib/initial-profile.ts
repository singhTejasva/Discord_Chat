// import { currentUser, redirectToSignIn } from "currentUser";

import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs/server";

export const initialProfile = async () => {
  const user = await currentUser();
  if (!user) {
    console.log(user, "ayush@123---->>11");
    return null;
  }

  console.log(user, "ayush123");
};
