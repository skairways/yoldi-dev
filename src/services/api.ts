import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { cookies } from "@/services/cookie";
import { CookieKeys } from "@/types/cookie";

const AxiosAPI = axios.create();

AxiosAPI.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

// any is temp solution since types of InternalAxiosRequestConfig is currently broken
const onRequest = (config: InternalAxiosRequestConfig): any => {
  const token = cookies.get(CookieKeys.ACCESS_TOKEN);
  return {
    ...config,
    headers: {
      "X-API-KEY": token,
    },
  };
};

const onRequestError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};

// Request interceptor
AxiosAPI.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};

// Response interceptor
AxiosAPI.interceptors.response.use(onResponse, onResponseError);

export default AxiosAPI;
