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
        });
    }
})

export default cartSlice.reducer