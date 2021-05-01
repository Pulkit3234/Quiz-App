import { configureStore } from '@reduxjs/toolkit';
import ApiSlice from './ApiSlice';

const store = configureStore({
    reducer: { api: ApiSlice.reducer}
});

export default store;