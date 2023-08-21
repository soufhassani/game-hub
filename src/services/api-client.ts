import axios from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2621fb99d24b435ea1025ee8842a1972",
  },
});
