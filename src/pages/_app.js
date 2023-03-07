import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Loader } from '@/components';
import { loadSessionFromLocal, logout, loadingStart, loadingStop, login } from '@/redux/action';
import store from '@/redux/store';
import Config from '@/config';
import API from '@/api';

import '@/styles/globals.css';
//import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <WrappingContainer pageProps={pageProps} Component={Component} />
    </Provider>
  );
}

const WrappingContainer = ({ Component, pageProps }) => {
  const { isLoading, userSession } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Handle logout action on unauthorized api call
    if (Config.UNAUTHORIZED_EXCEPTION == true) {
      dispatch(logout());
      Config.UNAUTHORIZED_EXCEPTION = false;
      router.replace('/');
    }
  }, [Config.UNAUTHORIZED_EXCEPTION]);

  useEffect(() => {
    // This use Effect is only used to load localstorage data into redux on page reload.

    dispatch(
      loadSessionFromLocal(
        localStorage.getItem('userSession') ? JSON.parse(localStorage.getItem('userSession')) : null
      )
    );

    const userData = JSON.parse(localStorage.getItem('userSession'));
    const data = {
      email: userData?.email,
      refresh_token: userData?.active_session_refresh_token
    };
    dispatch(loadingStart());
    API.auth
      .GetAccessToken(data)
      .then((response) => {
        if (response) {
          const temp = { ...userData, access_token: response.access_token };
          dispatch(login(temp));
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
};
