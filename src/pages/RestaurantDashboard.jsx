import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantSidebar from '../components/RestaurantSidebar'

const RestaurantDashboard = () => {
  return (
    <>
    <RestaurantSidebar title="Dashboard"/>
          <div className="rest-main-content">
        <div className="p-4">

          {/* Stats */}
          <div className="row g-3 mb-4">
            <div className="col-sm-6 col-xl-3">
              <div className="card bg-dark border p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <small className="text-secondary">Today's Orders</small>
                    <div className="fw-bold fs-3 mt-1">24</div>
                  </div>
                  <div className="btn btn-primary btn-sm rounded-3 px-2">
                    <i className="bi bi-bag-check" />
                  </div>
                </div>
                <small className="text-success mt-2">
                  <i className="bi bi-arrow-up" /> +12% from yesterday
                </small>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg-dark border p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <small className="text-secondary">Today's Revenue</small>
                    <div className="fw-bold fs-3 mt-1">₹6,480</div>
                  </div>
                  <div className="btn btn-success btn-sm rounded-3 px-2">
                    <i className="bi bi-currency-rupee" />
                  </div>
                </div>
                <small className="text-success mt-2">
                  <i className="bi bi-arrow-up" /> +8% from yesterday
                </small>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg-dark border p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <small className="text-secondary">Pending Orders</small>
                    <div className="fw-bold fs-3 mt-1 text-warning">5</div>
                  </div>
                  <div className="btn btn-warning btn-sm rounded-3 px-2">
                    <i className="bi bi-clock" />
                  </div>
                </div>
                <small className="text-warning mt-2">
                  <i className="bi bi-exclamation-circle" /> Needs attention
                </small>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg-dark border p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <small className="text-secondary">Avg Rating</small>
                    <div className="fw-bold fs-3 mt-1">4.9 ★</div>
                  </div>
                  <div className="btn btn-warning btn-sm rounded-3 px-2">
                    <i className="bi bi-star-fill" />
                  </div>
                </div>
                <small className="text-secondary mt-2">Based on 320 reviews</small>
              </div>
            </div>
          </div>

          <div className="row g-3">

            {/* Recent Orders */}
            <div className="col-lg-8">
              <div className="card bg-dark border p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">Recent Orders</h6>
                  <Link to="/restaurant/orders" className="btn btn-outline-secondary btn-sm">
                    View All
                  </Link>
                </div>
                <div className="table-responsive">
                  <table className="table table-dark table-borderless align-middle mb-0">
                    <thead className="border-bottom border-secondary">
                      <tr className="text-secondary small">
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="small">#QB1024</td>
                        <td className="small">Arjun P.</td>
                        <td className="small">Burger x2, Fries x1</td>
                        <td className="small fw-semibold">₹640</td>
                        <td><span className="badge bg-warning text-dark">Preparing</span></td>
                      </tr>
                      <tr>
                        <td className="small">#QB1023</td>
                        <td className="small">Priya S.</td>
                        <td className="small">Chicken Wrap x1</td>
                        <td className="small fw-semibold">₹320</td>
                        <td><span className="badge bg-info">Out for Delivery</span></td>
                      </tr>
                      <tr>
                        <td className="small">#QB1022</td>
                        <td className="small">Rohit V.</td>
                        <td className="small">Veg Burger x3</td>
                        <td className="small fw-semibold">₹780</td>
                        <td><span className="badge bg-success">Delivered</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Actions + Menu Summary */}
            <div className="col-lg-4 d-flex flex-column gap-3">
              <div className="card bg-dark border p-3">
                <h6 className="fw-bold mb-3">Quick Actions</h6>
                <div className="d-grid gap-2">
                  <Link to="/restaurant/menu" className="btn btn-primary btn-sm text-start">
                    <i className="bi bi-plus-circle me-2" />Add New Food Item
                  </Link>
                  <Link to="/restaurant/orders" className="btn btn-outline-secondary btn-sm text-start">
                    <i className="bi bi-list-check me-2" />View Pending Orders
                  </Link>
                  <Link to="/restaurant/profile" className="btn btn-outline-secondary btn-sm text-start">
                    <i className="bi bi-pencil me-2" />Edit Restaurant Info
                  </Link>
                </div>
              </div>

              <div className="card bg-dark border p-3">
                <h6 className="fw-bold mb-3">Menu Summary</h6>
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-secondary">Total Items</small>
                  <small className="fw-semibold">18</small>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-secondary">Available</small>
                  <small className="fw-semibold text-success">14</small>
                </div>
                <div className="d-flex justify-content-between">
                  <small className="text-secondary">Unavailable</small>
                  <small className="fw-semibold text-danger">4</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantDashboard