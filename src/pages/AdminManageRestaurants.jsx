import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const AdminManageRestaurants = () => {
  return (
    <>
    <AdminSidebar/>
    <div className="main-content">
             {/* ════ RESTAURANTS PAGE ════ */}
      <div id="page-restaurants" className="page p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h6 className="fw-bold mb-0">All Restaurants</h6>
          <div className="d-flex gap-2 flex-wrap">
            <input type="text" className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Search restaurants..." style={{width: '200px'}} />
            <select className="form-select form-select-sm bg-dark text-light border-secondary" style={{width: 'auto'}}>
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        {/* Tabs */}
        <ul className="nav nav-pills mb-3 gap-2">
          <li className="nav-item"><a className="nav-link active" href="#">All <span className="badge bg-light text-dark ms-1">128</span></a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Pending <span className="badge bg-warning text-dark ms-1">12</span></a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Approved <span className="badge bg-success ms-1">110</span></a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Rejected <span className="badge bg-danger ms-1">6</span></a></li>
        </ul>
        <div className="card bg-dark border">
          <div className="table-responsive">
            <table className="table table-dark table-borderless align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>Restaurant</th>
                  <th>Owner</th>
                  <th>Cuisine</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-secondary bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', fontSize: '1.3rem'}}>🍔</div>
                      <div>
                        <div className="small fw-semibold">Burger Palace</div>
                        <small className="text-secondary">Bengaluru</small>
                      </div>
                    </div>
                  </td>
                  <td className="small">Arjun Patel</td>
                  <td className="small">American</td>
                  <td className="small text-warning">★ 4.9</td>
                  <td><span className="badge bg-success">Approved</span></td>
                  <td>
                    <div className="d-flex gap-1">
                      <button className="btn btn-outline-secondary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm">Block</button>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-secondary bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', fontSize: '1.3rem'}}>🌶️</div>
                      <div>
                        <div className="small fw-semibold">Spice Garden</div>
                        <small className="text-secondary">Mumbai</small>
                      </div>
                    </div>
                  </td>
                  <td className="small">Sneha Nair</td>
                  <td className="small">Indian</td>
                  <td className="small text-secondary">—</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                  <td>
                    <div className="d-flex gap-1">
                      <button className="btn btn-success btn-sm">Approve</button>
                      <button className="btn btn-danger btn-sm">Reject</button>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-secondary border-opacity-25">
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-secondary bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', fontSize: '1.3rem'}}>🍕</div>
                      <div>
                        <div className="small fw-semibold">Pizza Fiesta</div>
                        <small className="text-secondary">Delhi</small>
                      </div>
                    </div>
                  </td>
                  <td className="small">Rohit Verma</td>
                  <td className="small">Italian</td>
                  <td className="small text-warning">★ 4.7</td>
                  <td><span className="badge bg-success">Approved</span></td>
                  <td>
                    <div className="d-flex gap-1">
                      <button className="btn btn-outline-secondary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm">Block</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-secondary bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', fontSize: '1.3rem'}}>🍣</div>
                      <div>
                        <div className="small fw-semibold">Sushi World</div>
                        <small className="text-secondary">Pune</small>
                      </div>
                    </div>
                  </td>
                  <td className="small">Kenji Sato</td>
                  <td className="small">Japanese</td>
                  <td className="small text-secondary">—</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                  <td>
                    <div className="d-flex gap-1">
                      <button className="btn btn-success btn-sm">Approve</button>
                      <button className="btn btn-danger btn-sm">Reject</button>
                    </div>
                  </td>
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

export default AdminManageRestaurants