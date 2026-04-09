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
    }

})

export default foodSlice.reducer