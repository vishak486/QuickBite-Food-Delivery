import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const AdminManageAllOrders = () => {
  return (
    <>
    <AdminSidebar/>
    <div className="main-content">
                 {/* ════ ALL ORDERS PAGE ════ */}
      <div id="page-orders" className="page p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h6 className="fw-bold mb-0">All Orders</h6>
          <div className="d-flex gap-2 flex-wrap">
            <input type="text" className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Search by order ID..." style={{width: '200px'}} />
            <select className="form-select form-select-sm bg-dark text-light border-secondary" style={{width: 'auto'}}>
              <option>All Status</option>
              <option>Placed</option>
              <option>Preparing</option>
              <option>Out for Delivery</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
        <div className="card bg-dark border">
          <div className="table-responsive">
            <table className="table table-dark table-borderless align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Restaurant</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">#QB1024</td>
                  <td className="small">Arjun P.</td>
                  <td className="small">Burger Palace</td>
                  <td className="small text-secondary">Burger x2, Fries x1</td>
                  <td className="small fw-semibold">₹640</td>
                  <td><span className="badge bg-success">Paid</span></td>
                  <td><span className="badge bg-warning text-dark">Preparing</span></td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">#QB1023</td>
                  <td className="small">Priya S.</td>
                  <td className="small">Pizza Fiesta</td>
                  <td className="small text-secondary">Margherita x1</td>
                  <td className="small fw-semibold">₹480</td>
                  <td><span className="badge bg-success">Paid</span></td>
                  <td><span className="badge bg-info">On the way</span></td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">#QB1022</td>
                  <td className="small">Rohit V.</td>
                  <td className="small">Noodle House</td>
                  <td className="small text-secondary">Noodles x2</td>
                  <td className="small fw-semibold">₹320</td>
                  <td><span className="badge bg-success">Paid</span></td>
                  <td><span className="badge bg-success">Delivered</span></td>
                </tr>
                <tr>
                  <td className="small fw-semibold">#QB1020</td>
                  <td className="small">Kiran D.</td>
                  <td className="small">Sushi World</td>
                  <td className="small text-secondary">Sushi Platter x1</td>
                  <td className="small fw-semibold">₹950</td>
                  <td><span className="badge bg-danger">Pending</span></td>
                  <td><span className="badge bg-secondary">Placed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
          <small className="text-secondary">Showing 1–10 of 2,100 orders</small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled"><a className="page-link bg-dark border-secondary" href="#">«</a></li>
              <li className="page-item active"><a className="page-link bg-admin border-0" href="#">1</a></li>
              <li className="page-item"><a className="page-link bg-dark border-secondary text-secondary" href="#">2</a></li>
              <li className="page-item"><a className="page-link bg-dark border-secondary text-secondary" href="#">3</a></li>
              <li className="page-item"><a className="page-link bg-dark border-secondary text-secondary" href="#">»</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminManageAllOrders