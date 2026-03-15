import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

const AdminSidebar = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100"
          style={{ background: 'rgba(0,0,0,0.5)', zIndex: 99 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className="d-flex flex-column py-3 px-0"
        style={{ transform: sidebarOpen ? 'translateX(0)' : '' }}
      >
        <div className="px-3 mb-4">
          <div className="fw-bold fs-5 mb-1">
            Quick<span style={{ color: 'var(--admin)' }}>Bite</span>
          </div>
          <small className="text-secondary">Platform Admin</small>
        </div>

        <nav className="nav flex-column gap-1 px-2">
          <NavLink
            to="/admin"
            end
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `nav-link sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${isActive ? 'active text-light' : 'text-secondary'}`
            }
          >
            <i className="bi bi-grid-1x2" /> Dashboard
          </NavLink>

         <NavLink to="/admin-categories" onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            `nav-link sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${isActive ? 'active text-light' : 'text-secondary'}`
          }
        >
          <i className="bi bi-tag" /> Categories
        </NavLink>

          <NavLink
            to="/admin-restaurants"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `nav-link sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${isActive ? 'active text-light' : 'text-secondary'}`
            }
          >
            <i className="bi bi-shop" /> Restaurants
          </NavLink>

          <NavLink
            to="/admin-users"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `nav-link sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${isActive ? 'active text-light' : 'text-secondary'}`
            }
          >
            <i className="bi bi-people" /> Users
          </NavLink>

          <NavLink
            to="/admin-orders"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `nav-link sidebar-link rounded-2 py-2 px-3 d-flex align-items-center gap-2 ${isActive ? 'active text-light' : 'text-secondary'}`
            }
          >
            <i className="bi bi-bag" /> All Orders
          </NavLink>
        </nav>

        <div className="mt-auto px-2">
          <hr className="border-secondary" />
          <button
            onClick={handleLogout}
            className="btn nav-link sidebar-link rounded-2 py-2 px-3 text-secondary d-flex align-items-center gap-2 w-100"
          >
            <i className="bi bi-box-arrow-left" /> Logout
          </button>
        </div>
      </div>

      {/* Topbar - sits in main content area */}
      
        <div className="bg-dark border-bottom border-secondary px-4 py-3 d-flex justify-content-between align-items-center sticky-top">
          <div className="d-flex align-items-center gap-3">
            {/* Mobile toggle */}
            <button
              className="btn btn-sm btn-outline-secondary d-lg-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="bi bi-list fs-5" />
            </button>
            <div className="fw-bold">{title}</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span
              className="badge px-3 py-2 rounded-pill"
              style={{ backgroundColor: 'var(--admin)' }}
            >
              Admin
            </span>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '34px', height: '34px', backgroundColor: 'var(--admin)' }}
            >
              <i className="bi bi-person-fill text-white" />
            </div>
          </div>
        </div>

    </>
  )
}

export default AdminSidebar