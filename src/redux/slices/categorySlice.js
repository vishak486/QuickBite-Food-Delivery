import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL="http://localhost:3000"


export const fetchAllCategories=createAsyncThunk('category/fetchAllCategories',async()=>{
    const token=localStorage.getItem('token')
    const response=await axios.get(`${SERVER_URL}/admin/getAllCategory`,
        {
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})

const categorySlice=createSlice({
    name:'category',
    initialState:{
        categoryList:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        // fetchAllCategories
        builder.addCase(fetchAllCategories.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchAllCategories.fulfilled,(state,action)=>{
            state.loading=false
            state.categoryList=action.payload
        })
        .addCase(fetchAllCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default categorySlice.reducer