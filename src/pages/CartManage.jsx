import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/slices/cartSlice'
import { Spinner } from 'react-bootstrap'
import { SERVER_URL } from "../config"

const CartManage = () => {
  const dispatch=useDispatch()
  const { cartList, loading, error } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
     <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {/* Restaurant Info */}
      {
        cartList?.restaurant&&(
           <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">{cartList.restaurant.name}</h4>
              <p className="mb-1">Cuisine: {cartList.restaurant.cuisine}</p>
              <p className="text-muted mb-0">
              {cartList.restaurant?.address?.street}, {cartList.restaurant?.address?.city}, 
              {cartList.restaurant?.address?.state} - {cartList.restaurant?.address?.pincode}  
              </p>
            </div>
          </div>
        )
      }
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {!loading && !error && (!cartList?.items || cartList.items.length === 0) && (
        <div className="text-center my-4">
          <h5>Your cart is empty</h5>
        </div>
      )}
     
      {
        cartList?.items?.length > 0 && (   
        <ul className="list-group mb-4">
          {
            cartList.items.map((item) => (
              <li key={item.food._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={`${SERVER_URL}/uploads/foods/${item.food.image}`}
                alt={item.food.name}
                className="rounded me-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div>
                <h6 className="mb-1">{item.food.name}</h6>
                <small className="text-muted">₹{item.food.price} each</small>
              </div>
            </div>

            <div className="d-flex align-items-center">
              {/* Quantity controls */}
              <button className="btn btn-sm btn-outline-secondary me-2">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="btn btn-sm btn-outline-secondary me-3">+</button>

              <strong className="me-3">₹{item.quantity * item.food.price}</strong>
              <button className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
              </li>
            ))
          }
          
        </ul>
        )
      }
      

      {/* Total + Checkout */}
      {cartList?.items?.length > 0 && (
        <div className="card shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Total: ₹{cartList.totalAmount}</h5>
            <button className="btn btn-primary btn-lg">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default CartManage