import Axios from 'axios';
import type { AxiosInstance } from 'axios';

const BUSINESS_API_BASE_URL = process.env.NEXT_PUBLIC_BUSINESS_API_BASE_URL as string;

export const businessAxios = Axios.create({
  baseURL: BUSINESS_API_BASE_URL,
});

export const setAxiosDefaultToken = (
  token: string,
  axiosInstance: AxiosInstance,
) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAxiosDefaultToken = () => {
  delete businessAxios.defaults.headers.common['Authorization'];
};
