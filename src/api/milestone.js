import { api, handleResponse, getToken } from '@/api/core';

const milestone = {
  CreateMilestone: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/milestone/create-milestone', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  GetMilestoneDetails: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/milestone/fetch-milestone', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  EditMilestoneDetails: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/milestone/edit-milestone', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
  DeleteMilestone: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('v1/milestone/delete-milestone', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  }
};

export default milestone;
