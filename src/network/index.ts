import { get_req, post_req, put_req } from "./network";

export const UploadTrain = async (path: string, data = {}, headers = {}) => {
  return post_req(path, data, headers).then((res) => res);
};

export const forgotPassword = async (path: string, data = {}, headers = {}) => {
  return post_req(path, data, headers).then((res) => res);
};

export const changePassword = async (path: string, data = {}, headers = {}) => {
  return put_req(path, data, headers).then((res) => res);
};

export const get_KBData = async (path: string, headers = {}) => {
  return get_req(path, headers).then((res) => res);
};
