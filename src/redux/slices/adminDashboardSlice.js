import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL="http://localhost:3000"

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

const adminDashboardSlice=createSlice({
    name:"adminDashboard",
    initialState:{
        dashboardList:[],
        loading:false,
        error:null
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
    }
})

export default adminDashboardSlice.reducer