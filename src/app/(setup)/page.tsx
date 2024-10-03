"use client";

import { getFromLocalStorage } from "@/lib/localStoreAccess";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  const router = useRouter();

  useEffect(() => {
    // checking is user loggedin or not ....
    const isLoggedIn = getFromLocalStorage("ACCESS_TOKEN");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <div>Create a Server ayush....</div>;
};

export default SetupPage;
