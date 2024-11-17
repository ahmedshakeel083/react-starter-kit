import { get_req, post_req, put_req } from "./network";

export const UploadTrain = async (path, data, headers = {}) => {
  return post_req(path, data, headers).then((res) => res);
};

export const forgotPassword = async (path, data, headers = {}) => {
  return post_req(path, data, headers).then((res) => res);
};

export const changePassword = async (path, data, headers = {}) => {
  return put_req(path, data, headers).then((res) => res);
};

export const get_KBData = async (path, headers = {}) => {
  return get_req(path, headers).then((res) => res);
};
