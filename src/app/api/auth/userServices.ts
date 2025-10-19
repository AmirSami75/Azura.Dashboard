import axios from "axios";
import { headers } from "next/headers";

const ip = "http://localhost";
const URL_SERVER = `${ip}:8585/api/v1`;

export const changePass = (data: object, token: any) => {
  const url = `${URL_SERVER}/auth/change-password`;

  return axios.put(url, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
