import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, verifyPayment } from '../redux/slices/orderSlice'
import { clearCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { cartList }=useSelector((state)=>state.cart)
    const { user } = useSelector((state) => state.auth);
    const [address,setAddress]=useState({
         street: "",city: "",state: "",pincode: "",landmark: "",
    })
    const handlePay=async()=>{
        try
        {
             const sanitizedItems = cartList.items.map((item) => ({
            food: item.food._id || item.food,  // ensure it's just the ID
            quantity: item.quantity,
            price: item.price,
            }));
            const result=await dispatch(
            createOrder({
                restaurantId: cartList.restaurant._id,
                items: sanitizedItems,
                totalAmount: cartList.totalAmount,
                shippingAddress: address,
            })
        ).unwrap();
         const options = {
            key: result.key,
            amount: result.amount * 100,
            currency: "INR",
            name: "QuickBite Food Ordering App",
            description: "Order Payment",
            order_id: result.orderId,
            handler: async function (response) {
            console.log("Razorpay response:", response);
            try {
                await dispatch(
                    verifyPayment({
                    razorpayOrderId: result.orderId,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpaySignature: response.razorpay_signature,
                    })
                );
                await dispatch(clearCart());
                setAddress({ street: "",city: "",state: "",pincode: "",landmark: "" })        
                navigate('/customer-orders');
                console.log("✅ verifyPayment dispatched successfully");
                } catch (err) {
                console.error("❌ Error in verifyPayment dispatch:", err);
                }
            },
             prefill: {
                name: user?.name || "Guest User",
                email: user?.email || "guest@example.com",
                contact: user?.phone || "9999999999",
            },
            theme: { color: "#3399cc" },
            config: {
            display: {
                blocks: {
                    banks: { name: "Pay via UPI", instruments: [{ method: "upi" }] },
                },
                sequence: ["block.banks"],
                preferences: { show_default_blocks: true },
            },
            },
        }
        console.log("Razorpay options:", options);
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", function (response) {
        console.error("❌ Payment failed:", response.error);
        });
        rzp.open();
        }
        catch(err)
        {
            console.error("Error in handlePay:", err);
        } 
    }
  return (
    <>
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>

      {/* Address Form */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Street"
          className="form-control mb-2"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          className="form-control mb-2"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="State"
          className="form-control mb-2"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pincode"
          className="form-control mb-2"
          value={address.pincode}
          onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Landmark"
          className="form-control mb-2"
          value={address.landmark}
          onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
        />
      </div>

      {/* Pay Button */}
      <button className="btn btn-success btn-lg" onClick={handlePay}>
        Pay Now
      </button>
    </div>
    </>
  )
}

export default Checkout