import { api, handleResponse, getToken } from '@/api/core';

const task = {
  CreateNewTask: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/task/create-task', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  EditTask: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/task/edit-task', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  DeleteTask: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/task/delete-task', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default task;
