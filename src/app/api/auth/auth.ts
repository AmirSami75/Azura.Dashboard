import axios from "axios";

interface ApiResponse<T = any> {
  isSuccess: boolean;
  data?: T;
  statusCode?: string;
  message: string;
}

const ip = "http://localhost";
const URL_SERVER = `${ip}:8585/api/v1`;

export const loginUserService = async (
  userName: string,
  password: string
): Promise<ApiResponse> => {
  const data = {
    userName,
    password,
  };

  const url = `${URL_SERVER}/auth/login`;
  // debugger;
  try {
    //? call login api
    const { data: res } = await axios.post(url, data);

    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "login successful",
    };
  } catch (err: any) {
    const errData = err.response?.data;
    // console.log(errData);

    // console.log(errData);
    return {
      isSuccess: errData.IsSuccess,
      data: null,
      statusCode: errData.StatusCode,
      // message,
      message: errData?.Message,
    };
  }
};

export const changePassService = async (
  passData: object,
  token: string
): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/auth/change-password`;
  // debugger;
  // console.log(passData, token);
  try {
    const { data: res } = await axios.put(url, passData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("change pass request api res : ", res);
    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "change pass successful",
    };
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "change pass failed";
    return {
      isSuccess: false,
      data: null,
      statusCode: err.response?.statusCode,
      message,
    };
  }
};

export const getRolesService = async (token: string): Promise<ApiResponse> => {
  const url = `${URL_SERVER}/role`;
  try {
    //? call role api
    const { data: res } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      isSuccess: res.isSuccess ?? true,
      data: res.data,
      statusCode: res.statusCode,
      message: res.message || "get roles successful",
    };
  } catch (err: any) {
    const errData = err.response?.data;
    return {
      isSuccess: errData.IsSuccess,
      data: null,
      statusCode: errData.StatusCode,
      message: errData.Message,
    };
  }
};
