import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import userReducer from './slices/userSlice'
import adminDashboardReducer  from './slices/adminDashboardSlice'
import restaurantReducer from './slices/restaurantSlice'
import foodReducer from './slices/foodSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        category:categoryReducer,
        user:userReducer,
        adminDashboard: adminDashboardReducer,
        restaurant: restaurantReducer,
        food:foodReducer,
    }
})