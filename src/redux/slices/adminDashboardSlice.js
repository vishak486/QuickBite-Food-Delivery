import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

export const approveRestaurantAdmin=createAsyncThunk('adminDashboard/approveRestaurantAdmin',async(id)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/approveRestaurant/${id}`,{},{
         headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.data
})
export const rejectRestaurantAdmin=createAsyncThunk('adminDashboard/rejectRestaurantAdmin',async(id)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/rejectRestaurantAdmin/${id}`,{},{
                 headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.data
})

export const getAdminDashboardStats = createAsyncThunk('adminDashboard/getAdminDashboardStats', async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${SERVER_URL}/admin/dashboard-stats`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
})

// Restaurant Admin

export const getRestaurantDashboardStats = createAsyncThunk('adminDashboard/getRestaurantDashboardStats', async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${SERVER_URL}/restaurant/dashboard-stats`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
})

const adminDashboardSlice=createSlice({
    name:"adminDashboard",
    initialState:{
        dashboardList:[],
        loading:false,
        error:null,
        stats: null,
        restaurantStats: null,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(approveRestaurantAdmin.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(approveRestaurantAdmin.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(approveRestaurantAdmin.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // rejectRestaurantAdmin
        .addCase(rejectRestaurantAdmin.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(rejectRestaurantAdmin.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(rejectRestaurantAdmin.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // getAdminDashboardStats
        .addCase(getAdminDashboardStats.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAdminDashboardStats.fulfilled, (state, action) => {
            state.loading = false
            state.stats = action.payload
        })
        .addCase(getAdminDashboardStats.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        // Restaurnat Admin dashboard
        .addCase(getRestaurantDashboardStats.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getRestaurantDashboardStats.fulfilled, (state, action) => {
            state.loading = false
            state.restaurantStats = action.payload
        })
        .addCase(getRestaurantDashboardStats.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default adminDashboardSlice.reducer