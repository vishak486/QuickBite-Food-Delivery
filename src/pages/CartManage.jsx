import React from 'react'

const CartManage = () => {
  return (
    <>
     <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {/* Restaurant Info */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="card-title">Devupidika</h4>
          <p className="mb-1">Cuisine: Vegetarian</p>
          <p className="text-muted mb-0">Shshsh Road, Kochi, Kerala</p>
        </div>
      </div>

      {/* Cart Items */}
      <ul className="list-group mb-4">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Beef Burger"
              className="rounded me-3"
            />
            <div>
              <h6 className="mb-1">Beef Burger</h6>
              <small className="text-muted">₹150 each</small>
            </div>
          </div>

          <div className="d-flex align-items-center">
            {/* Quantity controls */}
            <button className="btn btn-sm btn-outline-secondary me-2">-</button>
            <span className="mx-2">2</span>
            <button className="btn btn-sm btn-outline-secondary me-3">+</button>

            <strong className="me-3">₹300</strong>
            <button className="btn btn-sm btn-outline-danger">Remove</button>
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Veg Pizza"
              className="rounded me-3"
            />
            <div>
              <h6 className="mb-1">Veg Pizza</h6>
              <small className="text-muted">₹250 each</small>
            </div>
          </div>

          <div className="d-flex align-items-center">
            {/* Quantity controls */}
            <button className="btn btn-sm btn-outline-secondary me-2">-</button>
            <span className="mx-2">1</span>
            <button className="btn btn-sm btn-outline-secondary me-3">+</button>

            <strong className="me-3">₹250</strong>
            <button className="btn btn-sm btn-outline-danger">Remove</button>
          </div>
        </li>
      </ul>

      {/* Total + Checkout */}
      <div className="card shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Total: ₹550</h5>
          <button className="btn btn-primary btn-lg">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartManage