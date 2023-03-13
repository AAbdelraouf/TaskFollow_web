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

// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// import locale from 'antd/locale/zh_CN';
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
    const userData = localStorage.getItem('userSession')
      ? JSON.parse(localStorage.getItem('userSession'))
      : null;

    dispatch(loadSessionFromLocal(userData));
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
