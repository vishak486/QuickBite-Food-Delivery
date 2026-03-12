import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL="http://localhost:3000"

// Register Customer
export const registerCustomer=createAsyncThunk('auth/registerCustomer',async(formData,thunkAPI)=>{
    try
    {
        const res=await axios.post(`${SERVER_URL}/registerCustomer`,formData)
        return res.data
    }
    catch(err)
    {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Registration failed')
    }
})

// Register Restaurant
export const registerRestaurant=createAsyncThunk('auth/registerRestaurant',async(formData,thunkAPI)=>{
    try
    {
        const res=await axios.post(`${SERVER_URL}/registerRestaurant`,formData)
        return res.data
    }
    catch(err)
    {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Registration failed')
    }
})

// loginUser 

export const loginUser=createAsyncThunk('auth/loginUser',async(formData,thunkAPI)=>{
    try
    {
        const res=await axios.post(`${SERVER_URL}/login`,formData)
        localStorage.setItem('user',JSON.stringify(res.data.user))
        localStorage.setItem('token',res.data.token)
        return res.data
    }
    catch(err)
    {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed')  
    }
})

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:JSON.parse(localStorage.getItem('user')) || null,
        token:localStorage.getItem('token') || null,
        isAuthenticated:!!localStorage.getItem('token'),
        loading:false,
        error:null,
    },
    reducers:{
        logout: (state) => {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(registerCustomer.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(registerCustomer.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(registerCustomer.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })

        // Register Restaurant
        .addCase(registerRestaurant.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(registerRestaurant.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(registerRestaurant.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        })

        // Login
        .addCase(loginUser.pending,(state)=>{
            state.loading=true
            state.error=null
        }).
        addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload.user
            state.token=action.payload.token
            state.isAuthenticated = true 
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }

})

export const { logout }=authSlice.actions
export default authSlice.reducer