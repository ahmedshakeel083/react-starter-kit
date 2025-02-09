import axios from "axios";
// import { StorageManager } from "./StorageManger";

/* Common axios CLient */
const axiosClient = axios.create();
const CancelToken = axios.CancelToken;
axiosClient.defaults.baseURL = process.env.REACT_APP_WORLD_BANK_URL;

axiosClient.defaults.timeout = 20000;

axiosClient.interceptors.request.use((request) => {
  // const authToken = StorageManager.getLocal('authToken', null)
  // request.headers.set('authorization', `Bearer ${authToken}`);
  if (request.headers["Content-Type"] === "multipart/form-data") {
    request.headers.set("Content-Type", request.headers["Content-Type"]);
    return request;
  }
  request.headers.set("Content-Type", "application/json");
  return request;
});

export const get_req = async (url: string, headers = {}) => {
  const result = await axiosClient.get(url, {
    cancelToken: CancelToken.source().token,
    headers,
  });
  return result;
};

export const post_req = async (url: string, data = {}, headers = {}) => {
  console.log("headers", data);
  const result = await axiosClient.post(
    url,
    { ...data },
    {
      cancelToken: CancelToken.source().token,
      headers: { ...headers },
    },
  );
  return result;
};

export const put_req = async (url: string, data = {}, headers = {}) => {
  const result = await axiosClient.put(
    url,
    { ...data },
    {
      cancelToken: CancelToken.source().token,
      headers: { ...headers },
    },
  );
  return result;
};
/* Setting Header For request */
export const setRequestHeader = () => {
  axiosClient.interceptors.request.use(
    function (request) {
      request.headers["RequestTimestamp"] = new Date().toISOString();
      return request;
    },
    null,
    { synchronous: true },
  );
};
/* Setting Header For request during cross integration */
export const setAuthHeader = (authToken: string) => {
  axiosClient.defaults.headers["Authorization"] = `Bearer ${authToken}`;
};

export const setImagHeader = (data: string) => {
  axiosClient.defaults.headers["Content-Type"] = data;
};
