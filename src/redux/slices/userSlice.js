import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

export const FetchAllUsers=createAsyncThunk('user/FetchAllUsers',async({ search = '', role = 'all' } = {})=>{
    const token=localStorage.getItem('token')
    const response= await axios.get(`${SERVER_URL}/admin/getAllUsers`,{
         headers: {
                'Authorization': `Bearer ${token}`
            },
        params: { search, role }
    })
    return response.data
})

export const BlockUsers=createAsyncThunk('user/BlockUsers',async(id)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/admin/blockUsers/${id}`,{},{
        headers: {
                'Authorization': `Bearer ${token}`
            }
    })
    return response.data
})

export const UnBlockUsers=createAsyncThunk('user/UnBlockUsers',async(id)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/admin/unBlockUsers/${id}`,{},{
        headers: {
                'Authorization': `Bearer ${token}`
            }
    })
    return response.data
})

const userSlice=createSlice({
    name:"user",
    initialState:{
        userList:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(FetchAllUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(FetchAllUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.userList=action.payload
        })
        .addCase(FetchAllUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Block Users
        .addCase(BlockUsers.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(BlockUsers.fulfilled,(state,action)=>{
            state.loading=false
        })
        .addCase(BlockUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // Unblock users
        .addCase(UnBlockUsers.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(UnBlockUsers.fulfilled,(state,action)=>{
            state.loading=false
        })
        .addCase(UnBlockUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default userSlice.reducer