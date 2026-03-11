import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const AdminDashboard = () => {
  return (
    <>
    <AdminSidebar/>
    <div className="main-content">
        {/* Topbar */}
        <div className="bg-dark border-bottom border-secondary px-4 py-3 d-flex justify-content-between align-items-center sticky-top">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-outline-secondary d-lg-none" onclick="toggleSidebar()">
              <i className="bi bi-list fs-5" />
            </button>
            <div id="page-title" className="fw-bold">Dashboard</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-admin px-3 py-2 rounded-pill">Admin</span>
            <div className="rounded-circle bg-admin d-flex align-items-center justify-content-center" style={{width: '34px', height: '34px'}}>
              <i className="bi bi-person-fill text-white" />
            </div>
          </div>
        </div>
         {/* ════ DASHBOARD PAGE ════ */}
      <div id="page-dashboard" className="page active p-4">
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-xl-3">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <small className="text-secondary">Total Restaurants</small>
                  <div className="fw-bold fs-3 mt-1">128</div>
                </div>
                <div className="btn btn-admin btn-sm rounded-3 px-2"><i className="bi bi-shop" /></div>
              </div>
              <small className="text-success mt-2"><i className="bi bi-arrow-up" /> +6 this week</small>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <small className="text-secondary">Total Users</small>
                  <div className="fw-bold fs-3 mt-1">52.4K</div>
                </div>
                <div className="btn btn-success btn-sm rounded-3 px-2"><i className="bi bi-people" /></div>
              </div>
              <small className="text-success mt-2"><i className="bi bi-arrow-up" /> +240 today</small>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <small className="text-secondary">Total Orders</small>
                  <div className="fw-bold fs-3 mt-1">2.1M</div>
                </div>
                <div className="btn btn-warning btn-sm rounded-3 px-2"><i className="bi bi-bag" /></div>
              </div>
              <small className="text-success mt-2"><i className="bi bi-arrow-up" /> +1.2K today</small>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <small className="text-secondary">Pending Approvals</small>
                  <div className="fw-bold fs-3 mt-1 text-warning">12</div>
                </div>
                <div className="btn btn-danger btn-sm rounded-3 px-2"><i className="bi bi-clock-history" /></div>
              </div>
              <small className="text-warning mt-2"><i className="bi bi-exclamation-circle" /> Needs review</small>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Pending approvals quick view */}
          <div className="col-lg-6">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Pending Restaurant Approvals</h6>
                <a href="#" className="btn btn-outline-secondary btn-sm" onclick="show('restaurants')">View All</a>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center p-2 rounded-2 border border-secondary">
                  <div>
                    <div className="small fw-semibold">Spice Garden</div>
                    <small className="text-secondary">Indian · Submitted 2 hrs ago</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success btn-sm"><i className="bi bi-check-lg" /></button>
                    <button className="btn btn-danger btn-sm"><i className="bi bi-x-lg" /></button>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center p-2 rounded-2 border border-secondary">
                  <div>
                    <div className="small fw-semibold">Tandoor House</div>
                    <small className="text-secondary">North Indian · Submitted 5 hrs ago</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success btn-sm"><i className="bi bi-check-lg" /></button>
                    <button className="btn btn-danger btn-sm"><i className="bi bi-x-lg" /></button>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center p-2 rounded-2 border border-secondary">
                  <div>
                    <div className="small fw-semibold">Sushi World</div>
                    <small className="text-secondary">Japanese · Submitted 1 day ago</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success btn-sm"><i className="bi bi-check-lg" /></button>
                    <button className="btn btn-danger btn-sm"><i className="bi bi-x-lg" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent orders */}
          <div className="col-lg-6">
            <div className="card bg-dark border p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Recent Orders</h6>
                <a href="#" className="btn btn-outline-secondary btn-sm" onclick="show('orders')">View All</a>
              </div>
              <div className="table-responsive">
                <table className="table table-dark table-borderless align-middle small mb-0">
                  <thead className="border-bottom border-secondary text-secondary">
                    <tr><th>ID</th><th>Customer</th><th>Restaurant</th><th>Amount</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#QB1024</td><td>Arjun P.</td><td>Burger Palace</td>
                      <td className="fw-semibold">₹640</td>
                      <td><span className="badge bg-warning text-dark">Preparing</span></td>
                    </tr>
                    <tr>
                      <td>#QB1023</td><td>Priya S.</td><td>Pizza Fiesta</td>
                      <td className="fw-semibold">₹480</td>
                      <td><span className="badge bg-info">On the way</span></td>
                    </tr>
                    <tr>
                      <td>#QB1022</td><td>Rohit V.</td><td>Noodle House</td>
                      <td className="fw-semibold">₹320</td>
                      <td><span className="badge bg-success">Delivered</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default AdminDashboard