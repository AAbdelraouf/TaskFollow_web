import { sessionActions } from '@/redux/reducer/session';
import { navigationActions } from '@/redux/reducer/navigation';

// Actions from SessionReducer
export const {
  loadingStart,
  loadingStop,
  login,
  logout,
  signup,
  navbarToggle,
  loadSessionFromLocal
} = sessionActions;

export const { setCollapsed, setActiveRoute } = navigationActions;
