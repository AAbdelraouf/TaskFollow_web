import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: null, // Null so that for the first time only we can check the device size and set accordingly
  activeRoute: '/dashboard/business'
};

const navigationData = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    }
  }
});

export const navigationActions = navigationData.actions;
export default navigationData.reducer;
