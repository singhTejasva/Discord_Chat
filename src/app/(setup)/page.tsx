"use client";

import { ModeToggle } from "@/components/ui/theme-toggle";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/lib/localStoreAccess";
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

  const logoutUser = () => {
    removeFromLocalStorage("ACCESS_TOKEN");
  };

  return (
    <div>
      <button
        onClick={logoutUser}
        style={{
          marginTop: "20px",
          backgroundColor: "#7b1be5",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>Logout</p>
      </button>
      <ModeToggle />
    </div>
  );
};

export default SetupPage;
