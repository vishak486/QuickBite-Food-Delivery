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

export const getCustomerOrders=createAsyncThunk('order/getCustomerOrders',async()=>{
  const token=localStorage.getItem('token')
  const response=await axios.get(`${SERVER_URL}/customer/orders`,{
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
})

export const getCustomerOrderDetail=createAsyncThunk('order/getCustomerOrderDetail',async(orderId)=>{
  const token=localStorage.getItem('token')
  const response=await axios.get(`${SERVER_URL}/customer/orders/${orderId}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
  return response.data
})

const orderSlice=createSlice({
    name:"order",
    initialState:{
        currentOrder: null,
        orders: [],
        selectedOrder: null,
        loading:false,
        detailLoading: false,
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
      // Get Customer Orders
      .addCase(getCustomerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getCustomerOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get Order Detail
      .addCase(getCustomerOrderDetail.pending, (state) => {
        state.detailLoading  = true;
        state.error = null;
      })
      .addCase(getCustomerOrderDetail.fulfilled, (state, action) => {
        state.detailLoading  = false;
        state.selectedOrder = action.payload;
      })
      .addCase(getCustomerOrderDetail.rejected, (state, action) => {
        state.detailLoading  = false;
        state.error = action.error.message;
      })

    }
})

export default orderSlice.reducer