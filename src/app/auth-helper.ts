import axios from "axios";
import { User } from "./../Models/user";
import { PATH } from "./path";

export const setToken = (token: string): void => {
  localStorage.setItem("jwtToken", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("jwtToken");
};

export const removeToken = (): void => {
  localStorage.removeItem("jwtToken");
};

export const getUser = async (): Promise<User | null> => {
    try {
      const token = getToken();
      if (!token) return null;
  
      const response = await axios.get(`${PATH}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
  
      if (!response.data) {
        throw new Error('Failed to fetch user data');
      }
  
      return response.data as User;
  
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return null;
    }
};
