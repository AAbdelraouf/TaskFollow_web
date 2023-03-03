import { api, handleResponse, getToken } from '@/api/core';

const business = {
  GetCustomers: async () => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get('v1/business/get-customers', {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  AddNewCustomer: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/business/add-customer', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  EditCustomerDetails: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/business/edit-customer', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  DeleteCustomer: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/business/delete-customer', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default business;
