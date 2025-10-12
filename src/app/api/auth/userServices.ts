import axios from "axios";
import { headers } from "next/headers";

const ip = "http://localhost";
const URL_SERVER = `${ip}:8585/api/v1`;

// export const signupService = (data: any) => {
//   const url = `${URL_SERVER}/user`;
//   return axios.post(url, data);
// };

export const loginService = (data: any) => {
  const url = `${URL_SERVER}/auth/login`;

  return axios.post(url, data);
};

export const changePass = (data: object, token: any) => {
  const url = `${URL_SERVER}/auth/change-password`;

  return axios.put(url, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
