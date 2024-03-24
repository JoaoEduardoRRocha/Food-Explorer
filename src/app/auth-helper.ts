import axios from "axios";
import { User } from "./../Models/user";
import { PATH } from "./path";

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};

export const getUser = async (): Promise<User> => {
    const response = await axios.get(`${PATH}/api/auth/me`, {
      headers: {
        token: getToken(),
      }
    });

    return new Promise((resolve, reject) => {
      return resolve(response.data)
    })
};