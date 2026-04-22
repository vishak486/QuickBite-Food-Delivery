import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.auth)
    const handleLogout=()=>{
        dispatch(logout())
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
    <div className="container">
        <Link className="navbar-brand font-brand fw-bold fs-4" to={'/'}>
        Quick<span className="text-primary">Bite</span>
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
            <Link className="nav-link px-3" to={'/'}>
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link px-3" to={'/about'}>
                About
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link px-3" to={'/contact'}>
                Contact
            </Link>
            </li>
        </ul>
        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {
                user?(
                    <>
                    <a href="#" className="text-light position-relative">
                        <i className="bi bi-bag fs-5" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"style={{ fontSize: 10 }}>
                            3
                        </span>
                    </a>
                    <span className="text-light small fw-semibold">
                    {user.name}
                    </span>
                    <button
                    className="btn btn-outline-danger btn-sm px-3"
                    onClick={handleLogout}
                    >
                    Logout
                    </button>
                    </>   
                ):(
                <>
                <Link className="btn btn-outline-primary btn-sm px-3" to={'/login'} >
                Login
                </Link>
                <Link className="btn btn-primary btn-sm px-3" to={'/register'} >
                Sign Up
                </Link>
                </>
                )
            }
            
        </div>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Header