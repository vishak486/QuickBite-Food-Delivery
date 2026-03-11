import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const AdminManageUsers = () => {
  return (
    <>
    <AdminSidebar/>
    <div className="main-content">
         {/* ════ USERS PAGE ════ */}
      <div id="page-users" className="page p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h6 className="fw-bold mb-0">All Users</h6>
          <div className="d-flex gap-2">
            <input type="text" className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Search users..." style={{width: '200px'}} />
            <select className="form-select form-select-sm bg-dark text-light border-secondary" style={{width: 'auto'}}>
              <option>All Roles</option>
              <option>Customer</option>
              <option>Restaurant Admin</option>
            </select>
          </div>
        </div>
        <div className="card bg-dark border">
          <div className="table-responsive">
            <table className="table table-dark table-borderless align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Orders</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">Arjun Patel</td>
                  <td className="small text-secondary">arjun@gmail.com</td>
                  <td><span className="badge bg-admin">Customer</span></td>
                  <td className="small">42</td>
                  <td className="small text-secondary">Jan 2024</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td><button className="btn btn-danger btn-sm">Block</button></td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">Priya Sharma</td>
                  <td className="small text-secondary">priya@gmail.com</td>
                  <td><span className="badge bg-warning text-dark">Restaurant Admin</span></td>
                  <td className="small">—</td>
                  <td className="small text-secondary">Feb 2024</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td><button className="btn btn-danger btn-sm">Block</button></td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td className="small fw-semibold">Rahul Joshi</td>
                  <td className="small text-secondary">rahul@gmail.com</td>
                  <td><span className="badge bg-admin">Customer</span></td>
                  <td className="small">17</td>
                  <td className="small text-secondary">Mar 2024</td>
                  <td><span className="badge bg-danger">Blocked</span></td>
                  <td><button className="btn btn-success btn-sm">Unblock</button></td>
                </tr>
                <tr>
                  <td className="small fw-semibold">Sneha Nair</td>
                  <td className="small text-secondary">sneha@gmail.com</td>
                  <td><span className="badge bg-admin">Customer</span></td>
                  <td className="small">88</td>
                  <td className="small text-secondary">Dec 2023</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td><button className="btn btn-danger btn-sm">Block</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminManageUsers