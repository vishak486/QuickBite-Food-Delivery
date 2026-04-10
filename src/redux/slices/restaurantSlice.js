import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

export const getMyRestaurant=createAsyncThunk('restaurant/getMyRestaurant',async(passedToken,thunkAPI)=>{
   try
   {
     const token = passedToken || localStorage.getItem('token');
    const response=await axios.get(`${SERVER_URL}/restaurant/myRestaurant`,{
         headers: {
                'Authorization': `Bearer ${token}`
            }
    })
    return response.data
   }
   catch(err)
   {
      if (err.response && err.response.status === 404) {
        return null
      }
      return thunkAPI.rejectWithValue(err.response?.data);
   }
})

export const createRestaurantProfile=createAsyncThunk('restaurant/createRestaurantProfile',async(restaurantData)=>{
    const token=localStorage.getItem('token')
    const response=await axios.post(`${SERVER_URL}/restaurant/createRestaurant`,restaurantData,{
        headers: {
                'Authorization': `Bearer ${token}`
            }
    })
    return response.data
})


const restaurantSlice=createSlice({
    name:'restaurant',
    initialState:{
        restaurant:null,
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getMyRestaurant.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(getMyRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.restaurant=action.payload
        })
        .addCase(getMyRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Create Restaurant profile
        .addCase(createRestaurantProfile.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(createRestaurantProfile.fulfilled,(state,action)=>{
            state.loading=false
        })
        .addCase(createRestaurantProfile.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default restaurantSlice.reducer