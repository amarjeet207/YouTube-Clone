import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducer';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
