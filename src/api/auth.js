import { api, handleResponse } from '@/api/core';

const auth = {
  Login: async (data) => {
    let response = null;
    try {
      response = await api.post('/v1/auth/login', data);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default auth;
