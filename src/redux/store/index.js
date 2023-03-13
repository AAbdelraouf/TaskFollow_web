import { configureStore } from '@reduxjs/toolkit';
import session from '@/redux/reducer/session';
import navigation from '@/redux/reducer/navigation';
export default configureStore({
  reducer: {
    session,
    navigation
  }
});
