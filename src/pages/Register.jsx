import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerCustomer, registerRestaurant } from '../redux/slices/authSlice'

const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error}=useSelector((state)=>state.auth)

  const[role,setRole]=useState('customer')
  const[form,setForm]=useState({
    name:"",email:"",password:"",phone:""
  })
  const [showPassword, setShowPassword] = useState(false)
   const [successMsg, setSuccessMsg] = useState('')
   const handleSubmit=async(e)=>{
    e.preventDefault()
    setSuccessMsg('')
      if(role==='customer')
      {
        const result=await dispatch(registerCustomer(form))
        if (registerCustomer.fulfilled.match(result)) {
          setSuccessMsg(result.payload)
          setForm({name:"",email:"",password:"",phone:""})
          setTimeout(()=>navigate('/login'),1500)
        }
      }
      else
      {
         const result = await dispatch(registerRestaurant(form))
         if (registerRestaurant.fulfilled.match(result)) {
          setSuccessMsg(result.payload)
          setForm({name:"",email:"",password:"",phone:""})
          setTimeout(()=>navigate('/login'),1500)
        }
      }

   }
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
                    className={`btn btn-sm flex-fill ${role === 'customer' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={()=>setRole('customer')}>
                    🛒 Customer
                  </button>
                  <button
                    className={`btn btn-sm flex-fill ${role === 'restaurant_admin' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={()=>setRole('restaurant_admin')} >
                    🍴 Restaurant Owner
                  </button>
                </div>
                {/* Error */}
                  {error && (
                    <div className="alert alert-danger py-2 text-white small">{error}</div>
                  )}

                  {/* Success */}
                  {successMsg && (
                    <div className="alert alert-success py-2 text-white small">{successMsg}</div>
                  )}
                  <form onSubmit={handleSubmit} >
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label text-white small">
                            {role === 'customer' ? 'Full Name' : 'Restaurant Name'}
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-dark border-secondary text-secondary">
                              <i className="bi bi-person" />
                            </span>
                            <input
                              className="form-control bg-dark text-light border-secondary"
                              placeholder={role === 'customer' ? 'John Doe' : 'Burger Palace'}
                              type="text"
                              value={form.name}
                              onChange={e=>setForm({...form,name:e.target.value})}
                              required
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
                              value={form.email}
                              onChange={e=>setForm({...form,email:e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="form-label text-white small">Phone Number</label>
                          <div className="input-group">
                            <span className="input-group-text bg-dark border-secondary text-secondary">
                              <i className="bi bi-telephone" />
                            </span>
                            <input
                              className="form-control bg-dark text-light border-secondary"
                              placeholder="+91 XXXXX XXXXX"
                              type="text"
                              value={form.phone}
                              onChange={e=>setForm({...form,phone:e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                            <label className="form-label text-white small">Password</label>
                            <div className="input-group">
                              <span className="input-group-text bg-dark border-secondary text-secondary">
                                <i className="bi bi-lock"></i>
                              </span>
                              <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control bg-dark text-light border-secondary"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={e=>setForm({...form,password:e.target.value})}
                                required
                              />
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                        </div>
                        
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" disabled={loading}>
                            {loading
                              ? <><span className="spinner-border spinner-border-sm me-2"></span>Creating...</>
                              : <>Create Account <i className="bi bi-arrow-right ms-1"></i></>
                            }
                          </button>
                        </div>
                      </div>
                  </form>

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