import { sessionActions } from '@/redux/reducer/session';

// Actions from SessionReducer
export const {
  loadingStart,
  loadingStop,
  login,
  logout,
  signup
  // navbarToggle,
  // loadSessionFromLocal,
  // isCartPageRedirect
} = sessionActions;
