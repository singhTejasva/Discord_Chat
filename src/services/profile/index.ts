import axios from "axios";

const getUser = async (userId: string) => {
  try {
    const hotUrl = process.env.NEXT_PUBLIC_HOST_URL;
    console.log(hotUrl);
    const response = await axios.get(`${hotUrl}/profile`);
    if (!response) {
      throw new Error();
    }
    return response;
  } catch (err) {
    console.log(err);
  }
};
export default {
  getUser,
};
