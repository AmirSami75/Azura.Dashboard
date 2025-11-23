import axios from "axios";

import { addUserData } from "@/models/users/AdduserData";

interface ApiResponse<T = any> {
  isSuccess: boolean;
  data?: T;
  statusCode?: string;
  message: string;
}

const ip = "http://localhost";
const URL_SERVER = `${ip}:8585/api/v1`;

export const addUserService = async (
  token: string,
  data: addUserData
): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/user`;
  try {
    const { data: res } = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "delete user successful",
    };
  } catch (err: any) {
    // console.log(err);

    const message =
      err.response?.data?.Message || err.message || "delete user failed";
    return {
      isSuccess: err.isSuccess || false,
      data: null,
      statusCode: err.response?.statusCode,
      message,
    };
  }
};
