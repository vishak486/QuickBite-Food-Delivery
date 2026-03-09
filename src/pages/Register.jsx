import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
<div className="page-section" id="page-register">
  <div className="min-vh-100 d-flex align-items-center py-5 bg-dark">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <div className="card bg-dark border p-4 p-md-5">
            <div className="text-center mb-4">
              <div className="font-brand fw-bold text-white fs-3 mb-2">
                Quick
                <span className="text-primary">Bite</span>
              </div>
              <h4 className="font-brand fw-bold">Create account</h4>
              <p className="text-secondary small">
                Join thousands of food lovers
              </p>
            </div>
            <div className="d-flex gap-2 mb-4" id="registerRoles">
              <button
                className="btn btn-primary btn-sm flex-fill"
                onclick="setRole(this,'registerRoles')">
                🛒 Customer
              </button>
              <button
                className="btn btn-outline-secondary btn-sm flex-fill"
                onclick="setRole(this,'registerRoles')">
                🍴 Restaurant Owner
              </button>
            </div>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label text-white small">Name</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-person" />
                  </span>
                  <input
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="John"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-12">
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
              {/* <div className="col-12">
                <label className="form-label small">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-telephone" />
                  </span>
                  <input
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                  />
                </div>
              </div> */}
              <div className="col-sm-6">
                <label className="form-label text-white small">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-lock" />
                  </span>
                  <input
                    className="form-control bg-dark text-light border-secondary"
                    id="regPwd"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onclick="togglePwd('regPwd',this)"
                    type="button">
                    <i className="bi bi-eye" />
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label text-white small">Confirm Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-secondary">
                    <i className="bi bi-lock-fill" />
                  </span>
                  <input
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
             
              <div className="col-12">
                <button className="btn btn-primary w-100 py-2 fw-bold">
                  Create Account <i className="bi bi-arrow-right ms-2" />
                </button>
              </div>
            </div>
            <p className="text-center text-secondary small mt-4 mb-0">
              Already have an account?
              <Link to={'/login'} className="text-primary text-decoration-none fw-semibold">
                Sign in
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

export default Register