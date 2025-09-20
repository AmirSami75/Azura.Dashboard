import axios from "axios";

const ip = "192.168.1.111";
const URL_SERVER = `${ip}:8585/api/v1`;

export const signupService = (data: any) => {
  const url = `${URL_SERVER}/user`;
  return axios.post(url, data);
};

export const loginService = (data: any) => {
  const url = `${URL_SERVER}/auth/login`;
  return axios.post(url, data);
};
