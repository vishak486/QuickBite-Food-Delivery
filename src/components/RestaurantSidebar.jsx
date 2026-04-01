import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const RestaurantSidebar = ({ title }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
    setIsSidebarOpen(false)
    navigate('/login')
  }

  return (
    <>
      {/* Sidebar */}
      <div
        id="restaurant-sidebar"
        className={`d-flex flex-column py-3 px-0 ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="px-3 mb-4">
          <div className="fw-bold fs-5 mb-1">
            Quick<span className="text-primary">Bite</span>
          </div>
          <small className="text-secondary">Restaurant Admin</small>
        </div>

        <nav className="nav flex-column gap-1 px-2">
          <NavLink to="/restaurant/dashboard" end
            className={({ isActive }) =>
              `nav-link rest-sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${
                isActive ? 'active text-light' : 'text-secondary'
              }`
            }>
            <i className="bi bi-grid-1x2" /> Dashboard
          </NavLink>

          <NavLink to="/restaurant/menu"
            className={({ isActive }) =>
              `nav-link rest-sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${
                isActive ? 'active text-light' : 'text-secondary'
              }`
            }>
            <i className="bi bi-journal-text" /> Manage Menu
          </NavLink>

          <NavLink to="/restaurant/orders"
            className={({ isActive }) =>
              `nav-link rest-sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${
                isActive ? 'active text-light' : 'text-secondary'
              }`
            }>
            <i className="bi bi-bag-check" /> Manage Orders
          </NavLink>

          <NavLink to="/restaurant/profile"
            className={({ isActive }) =>
              `nav-link rest-sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${
                isActive ? 'active text-light' : 'text-secondary'
              }`
            }>
            <i className="bi bi-shop" /> Restaurant Profile
          </NavLink>
        </nav>

        <div className="mt-auto px-2">
          <hr className="border-secondary" />
          <button
            onClick={handleLogout}
            className="btn nav-link rest-sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2 w-100"
          >
            <i className="bi bi-box-arrow-left" /> Logout
          </button>
        </div>
      </div>

      {/* Topbar */}
      <div className="rest-topbar px-4 py-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-sm btn-outline-secondary d-lg-none"
            onClick={toggleSidebar}
            style={{ zIndex: 200 }} // ensures button stays above sidebar
          >
            {isSidebarOpen ? (
              <i className="bi bi-x fs-5" />   // close icon
            ) : (
              <i className="bi bi-list fs-5" /> // hamburger icon
            )}
          </button>
          <div className="fw-bold">{title}</div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-success px-3 py-2 rounded-pill">🟢 Open</span>
          <span className="text-secondary small d-none d-md-block">Burger Palace</span>
          <div
            className="rounded-circle d-flex align-items-center justify-content-center bg-primary"
            style={{ width: '34px', height: '34px' }}
          >
            <i className="bi bi-person-fill text-white" />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div id="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  )
}

export default RestaurantSidebar
