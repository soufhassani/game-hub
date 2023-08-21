import axios, { AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2621fb99d24b435ea1025ee8842a1972",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
