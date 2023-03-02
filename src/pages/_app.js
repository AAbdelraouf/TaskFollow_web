import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Loader } from '@/components';
import { loadSessionFromLocal, logout } from '@/redux/action';
import store from '@/redux/store';
import Config from '@/config';

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
  const { isLoading, session } = useSelector((state) => state.session);
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
