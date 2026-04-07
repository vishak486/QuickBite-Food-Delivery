import React from 'react'
import RestaurantSidebar from '../components/RestaurantSidebar'
import { Link } from 'react-router-dom'
import RestaurantAddFood from '../components/RestaurantAddFood'


const RestaurantManageMenu = () => {
  return (
    <>
        <RestaurantSidebar title="Manage Menu"/>
        <div className="rest-content p-4">
        {/* Header row with search + Add Food button */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search food items..."
          />
          <RestaurantAddFood/>
        </div>

        {/* Table */}
        <div className="card bg-dark border p-3">
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example static rows for design */}
                <tr>
                  <td className="small">Veg Burger</td>
                  <td className="small">Delicious veggie patty with lettuce</td>
                  <td className="small fw-semibold">₹120</td>
                  <td>
                    <img
                      src="/images/veg-burger.jpg"
                      alt="Veg Burger"
                      style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </td>
                  <td className="small">Fast Food</td>
                  <td>
                    <span className="badge bg-success">Available</span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-pencil" /> Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="small">French Fries</td>
                  <td className="small">Crispy golden fries</td>
                  <td className="small fw-semibold">₹90</td>
                  <td>
                    <img
                      src="/images/fries.jpg"
                      alt="French Fries"
                      style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </td>
                  <td className="small">Snacks</td>
                  <td>
                    <span className="badge bg-danger">Unavailable</span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-pencil" /> Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantManageMenu