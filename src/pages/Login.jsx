import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="page-section" id="page-login">
    <div className="min-vh-100 d-flex align-items-center py-5 bg-dark">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-7 col-lg-5">
            <div className="card bg-dark border p-4 p-md-5">
                <div className="text-center mb-4">
                <div className="font-brand fw-bold fs-3 mb-2 text-white">
                    Quick
                    <span className="text-primary">Bite</span>
                </div>
                <h4 className="font-brand fw-bold">Welcome back!</h4>
                <p className="text-secondary small">
                    Sign in to continue ordering
                </p>
                </div>
                <div className="d-flex gap-2 mb-4" id="loginRoles">
                <button
                    className="btn btn-primary btn-sm flex-fill"
                    onclick="setRole(this,'loginRoles')">
                    🛒 Customer
                </button>
                <button
                    className="btn btn-outline-secondary btn-sm flex-fill"
                    onclick="setRole(this,'loginRoles')">
                    🍴 Restaurant
                </button>
                <button
                    className="btn btn-outline-secondary btn-sm flex-fill"
                    onclick="setRole(this,'loginRoles')">
                    ⚙️ Admin
                </button>
                </div>
                <div className="mb-3">
                <label className="form-label text-white small">Email Address</label>
                <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-envelope" />
                    </span>
                    <input
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="you@example.com"
                    type="email"
                    />
                </div>
                </div>
                <div className="mb-2">
                <label className="form-label text-white small">Password</label>
                <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-lock" />
                    </span>
                    <input
                    className="form-control bg-dark text-light border-secondary"
                    id="loginPwd"
                    placeholder="••••••••"
                    type="password"
                    />
                    <button
                    className="btn btn-outline-secondary"
                    type="button">
                    <i className="bi bi-eye" />
                    </button>
                </div>
                </div>

                <button className="btn btn-primary w-100 py-2 fw-bold mb-3">
                Sign In <i className="bi bi-arrow-right ms-2" />
                </button>
                <p className="text-center text-secondary small mb-0">
                Don't have an account?
                <Link to={'/register'} className="text-primary text-decoration-none fw-semibold" >
                    Sign up free
                </Link>
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login