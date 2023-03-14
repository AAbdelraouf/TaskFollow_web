import { api, handleResponse, getToken } from '@/api/core';

const customer = {
  GetBusinessList: async () => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get('v1/customer/get-businesses', {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default customer;
