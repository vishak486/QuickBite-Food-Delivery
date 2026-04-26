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

export const editRestaurantProfile=createAsyncThunk('restaurant/editRestaurantProfile',async(restaurantData)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/restaurant/editRestaurant`,restaurantData,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
    )
    return response.data
})

// Admin Get All Restaurants
export const fetchAllRestaurants =createAsyncThunk('restaurant/fetchAllRestaurants',async(searchKey="")=>{
    const token=localStorage.getItem("token")
    const response=await axios.get(`${SERVER_URL}/admin/allRestaurants?search=${searchKey}`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return response.data
})

// Admin Activate Restaurant
export const activateRestaurant =createAsyncThunk('restaurant/activateRestaurant',async(restaurantId)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/activateRestaurant/${restaurantId}`,{},{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return response.data
})
// Admin Deactivate Restaurant
export const deactivateRestaurant=createAsyncThunk('restaurant/deactivateRestaurant',async(restaurantId)=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/deactivateRestaurant/${restaurantId}`,{},{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return response.data
})

// Customer: Fetch all active restaurants
export const fetchActiveRestaurants=createAsyncThunk('restaurant/fetchActiveRestaurants',async()=>{
    const response=await axios.get(`${SERVER_URL}/customer/restaurants`)
    return response.data
})


const restaurantSlice=createSlice({
    name:'restaurant',
    initialState:{
        restaurant:null,
        restaurantList: [],
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

        .addCase(editRestaurantProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(editRestaurantProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload; // replace with updated restaurant
        })
        .addCase(editRestaurantProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        })

        // Fetch All Restaurants (Admin)
        .addCase(fetchAllRestaurants.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchAllRestaurants.fulfilled,(state,action)=>{
            state.loading=false
            state.restaurantList=action.payload
        })
        .addCase(fetchAllRestaurants.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(activateRestaurant.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.restaurantList.findIndex(r => r._id === updated._id);
        if (index !== -1) {
            state.restaurantList[index] = updated;
        }
        })
        .addCase(deactivateRestaurant.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.restaurantList.findIndex(r => r._id === updated._id);
        if (index !== -1) {
            state.restaurantList[index] = updated;
        }
        })

        .addCase(fetchActiveRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(fetchActiveRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurantList = action.payload; 
        })
        .addCase(fetchActiveRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        })
    }
})

export default restaurantSlice.reducer