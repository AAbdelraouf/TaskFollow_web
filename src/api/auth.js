import { api, handleResponse, getToken } from '@/api/core';

const auth = {
  Login: async (data) => {
    let response = null;
    try {
      response = await api.post('/v1/auth/login', data);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  SignUp: async (data) => {
    let response = null;
    try {
      response = await api.post('/v1/auth/signup', data);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  AddBusinessDetails: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/auth/add-or-update-business-details', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  GetAccessToken: async (data) => {
    let response = null;
    try {
      response = await api.get(`v1/auth//get-access-token/${data.email}/${data.refresh_token}`, {
        params: {}
      });
    } catch (error) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default auth;
