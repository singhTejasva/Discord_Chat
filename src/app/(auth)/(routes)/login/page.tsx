"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { UserLogInService } from "@/services/auth";
import { setInLocalStorage } from "@/lib/localStoreAccess";

export default function Login() {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const onChageUserDetails = (
    e: ChangeEvent<HTMLInputElement>,
    targetField: string
  ) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [targetField]: e.target.value,
      };
    });
  };

  const UserLoginIn = async () => {
    const userAccesToken = await UserLogInService(userDetails);
    if (userAccesToken) {
      setInLocalStorage("ACCESS_TOKEN", userAccesToken);
      router.push("/");
    }
    console.log(userAccesToken);
  };

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <span>Email :</span>
          <input
            placeholder="email"
            value={userDetails?.email}
            onChange={(e) => onChageUserDetails(e, "email")}
            style={{ marginLeft: "10px" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <span>Password :</span>
          <input
            placeholder="password"
            value={userDetails?.password}
            onChange={(e) => onChageUserDetails(e, "password")}
            style={{ marginLeft: "10px" }}
          />
        </div>

        <button
          onClick={UserLoginIn}
          style={{
            marginTop: "20px",
            backgroundColor: "#7b1be5",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>SIGN IN</p>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
