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
  UpdateBusinessDetails: async (data) => {
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
  }
};

export default auth;
