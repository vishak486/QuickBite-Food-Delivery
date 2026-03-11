import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
        
      {/* ── SIDEBAR ── */}
      <div id="sidebar" className="d-flex flex-column py-3 px-0">
        <div className="px-3 mb-4">
          <div className="fw-bold fs-5 mb-1">Quick<span className="text-admin">Bite</span></div>
          <small className="text-secondary">Platform Admin</small>
        </div>
        <nav className="nav flex-column gap-1 px-2">
          <Link to={'/admin'} className="nav-link sidebar-link active rounded-2 py-2 px-3 text-light d-flex align-items-center gap-2" onclick="show('dashboard')">
            <i className="bi bi-grid-1x2" /> Dashboard
          </Link>
          <Link to={'/admin-restaurants'} className="nav-link sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2" onclick="show('restaurants')">
            <i className="bi bi-shop" /> Restaurants
          </Link>
          <Link to={'/admin-users'} className="nav-link sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2" onclick="show('users')">
            <i className="bi bi-people" /> Users
          </Link>
          <Link to={'/admin-orders'} className="nav-link sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2" onclick="show('orders')">
            <i className="bi bi-bag" /> All Orders
          </Link>
        </nav>
        <div className="mt-auto px-2">
          <hr className="border-secondary" />
          <a href="#" className="nav-link sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2">
            <i className="bi bi-box-arrow-left" /> Logout
          </a>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar