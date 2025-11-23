import axios from "axios";

import { userDataProps } from "@/models/users/AdduserData";

interface ApiResponse<T = any> {
  isSuccess: boolean;
  data?: T;
  statusCode?: string;
  message: string;
}

const ip = "http://localhost";
const URL_SERVER = `${ip}:8585/api/v1`;

export const getAllUsers = async (token: string): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/user`;
  // debugger;
  console.log(token);
  try {
    const { data: res } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "getting all users successful",
    };
  } catch (err: any) {
    console.log(err);

    const message =
      err.response?.data?.message || err.message || "getting all users failed";
    return {
      isSuccess: err.isSuccess || false,
      data: null,
      statusCode: err.response?.statusCode,
      message,
    };
  }
};

export const addUserService = async (
  token: string,
  data: userDataProps
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

export const editUserService = async (
  token: string,
  data: userDataProps,
  id: string
): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/user/${id}`;
  try {
    const { data: res } = await axios.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(res);
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

export const getUserService = async (
  token: string,
  id: string
): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/user/${id}`;
  // debugger;
  // console.log(token);
  try {
    const { data: res } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(res);
    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "getting user successful",
    };
  } catch (err: any) {
    console.log(err);

    const message =
      err.response?.data?.message || err.message || "getting user failed";
    return {
      isSuccess: err.isSuccess || false,
      data: null,
      statusCode: err.response?.statusCode,
      message,
    };
  }
};

export const deleteUserService = async (
  token: string,
  id: string
): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/user/${id}`;
  // debugger;
  // console.log(token);
  try {
    const { data: res } = await axios.delete(url, {
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
    console.log(err);

    const message =
      err.response?.data?.message || err.message || "delete user failed";
    return {
      isSuccess: err.isSuccess || false,
      data: null,
      statusCode: err.response?.statusCode,
      message,
    };
  }
};
