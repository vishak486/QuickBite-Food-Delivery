import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../config";
import axios from "axios";

export const addToCart=createAsyncThunk('cart/addToCart',async(cartData)=>{
    const token=localStorage.getItem('token')
    const response=await axios.post(`${SERVER_URL}/customer/AddCart`,cartData,{
         headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return response.data
})
export const getCart = createAsyncThunk("cart/getCart", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${SERVER_URL}/customer/getCart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const updateCart=createAsyncThunk("cart/updateCart",async({ foodId, quantity })=>{
    const token=localStorage.getItem("token")
    const response=await axios.put(`${SERVER_URL}/customer/cartUpdate/${foodId}`,{ quantity },{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
})
export const removeCartItem =createAsyncThunk("cart/removeCartItem",async(foodId)=>{
    const token=localStorage.getItem("token")
    const response=await axios.delete(`${SERVER_URL}/customer/removeCartItem/${foodId}`,
        {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return response.data
})
export const clearCart = createAsyncThunk("cart/clearCart", async () => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${SERVER_URL}/customer/clearCart`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(addToCart.pending,(state)=>{
            state.loading=true
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading=false
            state.cartList=action.payload
        }).
        addCase(addToCart.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // Get Cart
        .addCase(getCart.pending, (state) => {
        state.loading = true;
        })
        .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartList = action.payload;
        })
        .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        })

        // UpdateCart
        .addCase(updateCart.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateCart.fulfilled,(state,action)=>{
            state.loading=false
            state.cartList = action.payload
        })
        .addCase(updateCart.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Remove Cart Item
        .addCase(removeCartItem.pending, (state) => {
            state.loading = true;
        })
        .addCase(removeCartItem.fulfilled, (state, action) => {
            state.loading = false;
            state.cartList = action.payload; 
        })
        .addCase(removeCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        // Clear Cart
        .addCase(clearCart.fulfilled, (state) => {
            state.loading = false;
            state.cartList = [];
        })
    }
})

export default cartSlice.reducer