import axios from "axios";
import { toast } from "react-toastify";

export const signInService = async (user: any): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/profile/sign-in`;
  try {
    const response = await axios.post(
      url,
      {
        ...user,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err: any) {
    toast.error(err.response.data.message, {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
};

export const UserLogInService = async (user: any): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/profile/login`;
  try {
    const response = await axios.post(
      url,
      {
        ...user,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (!response) {
      alert("user chutiya hai");
    }
    return response.data;
  } catch (err: any) {
    toast.error(err.response.data.message, {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
};
