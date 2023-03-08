import axios from 'axios';
import Config from '@/config';
import { toast } from 'react-toastify';
import moment from 'moment';

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const handleResponse = (response) => {
  if (response?.status === 202) toast.error(response.data.error);
  else if (response?.response?.status === 500) toast.error(response?.message);
  else if (response?.response?.status === 401) {
    Config.UNAUTHORIZED_EXCEPTION = true;
    toast.error('You are not authorized for the action.');
  } else if (response?.status === 200) return response?.data;
  else toast.error('Something went wrong. Please contact server admin.');
  return false;
};

export const getToken = async () => {
  const session = localStorage.getItem('userSession')
    ? JSON.parse(localStorage.getItem('userSession'))
    : null;

  let response = session?.access_token;
  const token_expired = moment(session.token_expiry).diff(moment(), 'seconds') < 5 ? true : false;

  if (session && token_expired) {
    //call refresh token and update client token
    try {
      const apiresponse = await api.get(
        '/v1/auth/refresh-token/' + session.email + '/' + session.active_session_refresh_token
      );
      if (apiresponse?.status === 200) {
        session.access_token = apiresponse.data.access_token;
        session.token_expiry = apiresponse.data.token_expiry;
        session.active_session_refresh_token = apiresponse.data.active_session_refresh_token;
        response = session.access_token;
        localStorage.setItem('userSession', JSON.stringify(session));
      } else {
        throw apiresponse.data.error;
      }
    } catch (e) {
      Config.UNAUTHORIZED_EXCEPTION = true;
      toast.error('You are not authorized for the action.');
    }
  }

  return response;
};
