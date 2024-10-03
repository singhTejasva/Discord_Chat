import { toast } from "react-toastify";

const setInLocalStorage = (key: string, value: string): void => {
  if (!localStorage) {
    toast.error("Soemthing went wrong  seeting tin local storage... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
  try {
    localStorage.setItem(key, value);
  } catch (err: any) {
    toast.error("Soemthing went wrong ... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
};

const getFromLocalStorage = (key: string): string | undefined | null => {
  if (!localStorage) {
    toast.error("Soemthing went wrong ... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (err: any) {
    toast.error("Soemthing went wrong  n local storage... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
};

const removeFromLocalStorage = (key: string): void => {
  if (!localStorage) {
    toast.error("Soemthing went wrong ... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
  try {
    localStorage.removeItem(key);
  } catch (err: any) {
    toast.error("Soemthing went wrong  n local storage... ", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
};

export { getFromLocalStorage, setInLocalStorage, removeFromLocalStorage };
