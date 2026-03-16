import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL="http://localhost:3000"


export const fetchAllCategories=createAsyncThunk('category/fetchAllCategories',async()=>{
    const token=localStorage.getItem('token')
    const response=await axios.get(`${SERVER_URL}/admin/getAllCategory`,
        {
             headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})

export const AddCategories=createAsyncThunk('category/AddCategroies',async(formdata)=>{
    const token=localStorage.getItem('token')
    const response=await axios.post(`${SERVER_URL}/createCategory`,formdata,
        {
             headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})

export const EditCategories=createAsyncThunk('category/EditCategories',async({formdata,id})=>{
    const token=localStorage.getItem('token')
    const response=await axios.put(`${SERVER_URL}/admin/updateCategory/${id}`,formdata,
        {
             headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return response.data
})

export const activateCategory = createAsyncThunk('category/activateCategory', async (id) => {
  const token = localStorage.getItem('token')
  const response = await axios.put(`${SERVER_URL}/admin/activateCategory/${id}`, {}, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  return response.data
})

export const deactivateCategory = createAsyncThunk('category/deactivateCategory', async (id) => {
  const token = localStorage.getItem('token')
  const response = await axios.put(`${SERVER_URL}/admin/deactivateCategory/${id}`, {}, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
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

        // Add Category
        .addCase(AddCategories.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(AddCategories.fulfilled,(state,action)=>{
            state.loading=false
        })
        .addCase(AddCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // edit categories
        .addCase(EditCategories.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(EditCategories.fulfilled,(state,action)=>{
            state.loading=false
        })
        .addCase(EditCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Activate and Deactivate status
        .addCase(activateCategory.fulfilled, (state) => {
        state.loading = false
        })
        .addCase(deactivateCategory.fulfilled, (state) => {
        state.loading = false
        })
    }
})

export default categorySlice.reducer