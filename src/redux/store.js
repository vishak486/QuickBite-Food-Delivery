import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import userReducer from './slices/userSlice'
import adminDashboardReducer  from './slices/adminDashboardSlice'
export const store=configureStore({
    reducer:{
        auth:authReducer,
        category:categoryReducer,
        user:userReducer,
        adminDashboard: adminDashboardReducer,
    }
})