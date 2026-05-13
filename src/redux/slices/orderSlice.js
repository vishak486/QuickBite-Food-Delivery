import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../config";

export const createOrder=createAsyncThunk("order/createOrder",async({ restaurantId, items, totalAmount, shippingAddress })=>{
    const token=localStorage.getItem("token")
    const response=await axios.post(`${SERVER_URL}/customer/createOrder`,{ restaurantId, items, totalAmount, shippingAddress },
        { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
})

export const verifyPayment =createAsyncThunk("order/verifyPayment",async({ razorpayOrderId, razorpayPaymentId, razorpaySignature })=>{
    const token=localStorage.getItem("token")
    const response=await axios.post(`${SERVER_URL}/customer/verifyPayment`,
        { razorpayOrderId, razorpayPaymentId, razorpaySignature },
        { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
})

const orderSlice=createSlice({
    name:"order",
    initialState:{
        currentOrder: null,
        loading:false,
        error:null,
        paymentVerified: false,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        // Create Order
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Verify Payment
    builder
      .addCase(verifyPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentVerified = true;
        state.currentOrder = action.payload.order;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.paymentVerified = false;
      })
    }
})

export default orderSlice.reducer