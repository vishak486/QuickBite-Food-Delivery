import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../config";


export const fetchAllFoods=createAsyncThunk("food/fetchAllFoods",async(search)=>{
    const token=localStorage.getItem('token')
    const response=await axios.get(`${SERVER_URL}/restaurant/fetchAllFoods?search=${search}`,
        {
             headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})
// fetch each food created by each restaurant
export const fetchEachFoodsCreatedByEachRestaurant=createAsyncThunk("food/fetchEachFoodsCreatedByEachRestaurant",async(search)=>{
    const token=localStorage.getItem('token')
    const response=await axios.get(`${SERVER_URL}/restaurant/fetchEachFood?search=${search}`,
        {
             headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})

export const addFood=createAsyncThunk("food/addFood",async(foodData)=>{
    const token=localStorage.getItem("token")
    const response= await axios.post(`${SERVER_URL}/restaurant/createFood`,foodData,
        {
             headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    )
    return response.data
})
export const editFood=createAsyncThunk("food/editFood",async(formData)=>{
    const token=localStorage.getItem("token")
    const response=await axios.put(`${SERVER_URL}/restaurant/editFood`,formData,
        {
             headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    )
    return response.data
})
export const markFoodUnavailable=createAsyncThunk('food/markFoodUnavailable',async(foodId)=>{
    const token=localStorage.getItem('token')
    const response= await axios.put(`${SERVER_URL}/restaurant/unAvailableFood/${foodId}`,{},{
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
})
export const markFoodAvailable =createAsyncThunk('food/markFoodAvailable',async(foodId)=>{
    const token=localStorage.getItem('token')
    const response= await axios.put(`${SERVER_URL}/restaurant/AvailableFood/${foodId}`,{},{
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
})

//fetchFoodsByRestaurant by customer 
export const fetchFoodsByRestaurant=createAsyncThunk('food/fetchFoodsByRestaurant',async(restaurantId)=>{
    const response=await axios.get(`${SERVER_URL}/customer/restaurants/${restaurantId}/foods`)
    return response.data
})



const foodSlice=createSlice({
    name:"food",
    initialState:{
        foodList:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllFoods.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchAllFoods.fulfilled,(state,action)=>{
            state.loading=false
            state.foodList=action.payload
        })
        .addCase(fetchAllFoods.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // AddFood by Restaurant Admin
        .addCase(addFood.pending,(state)=>{
            state.loading=true
        })
        .addCase(addFood.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(addFood.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // EditFood by rest admin
        .addCase(editFood.pending,(state)=>{
            state.loading=true
        })
        .addCase(editFood.fulfilled,(state,action)=>{
            state.loading=false
            const updated = action.payload
            state.foodList=state.foodList.map(f=>f._id===updated._id?updated:f)
        })
        .addCase(editFood.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // Fetch food created by each restaurant
        .addCase(fetchEachFoodsCreatedByEachRestaurant.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchEachFoodsCreatedByEachRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.foodList=action.payload
        })
        .addCase(fetchEachFoodsCreatedByEachRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // Restaurant Admin Update Food availability
        .addCase(markFoodUnavailable.fulfilled,(state,action)=>{
            state.loading=false
            const updated = action.payload
            state.foodList = state.foodList.map(f =>
                f._id === updated._id ? updated : f
            )
        })
        .addCase(markFoodAvailable.fulfilled,(state,action)=>{
            state.loading=false
            const updated = action.payload
            state.foodList = state.foodList.map(f =>
                f._id === updated._id ? updated : f
            )
        })
        // Customer FetchFood
        .addCase(fetchFoodsByRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(fetchFoodsByRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.foodList = action.payload; 
        })
        .addCase(fetchFoodsByRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        })
    }

})

export default foodSlice.reducer