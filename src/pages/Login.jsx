import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/slices/authSlice'

const Login = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[form,setForm]=useState({
        email:"",password:""
    })
    const [showPassword, setShowPassword] = useState(false)
    const {loading,error}=useSelector((state)=>state.auth)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const result=await dispatch(loginUser(form))
        if(loginUser.fulfilled.match(result))
        {
            const role=result.payload.user.role
            if(role==='admin')
            navigate('/admin')
            else if(role === 'restaurant_admin')
            navigate('/restaurant/dashboard')
            else navigate('/')
        }
    }

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
                    Sign in to continue
                </p>
                </div>
                {error && (
                  <div className="alert alert-danger text-white py-2 small">{error}</div>
                )}

                <form onSubmit={handleSubmit} >
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
                        value={form.email}
                        onChange={e=>setForm({...form,email:e.target.value})}
                        required
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
                            type={showPassword ? 'text' : 'password'}
                            className="form-control bg-dark text-light border-secondary"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            required
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
                        </button>
                        </div>
                    </div>

                    <button type='submit' disabled={loading} className="btn btn-primary w-100 py-2 fw-bold mb-3">
                    {loading
                        ? <><span className="spinner-border spinner-border-sm me-2"></span>Signing in...</>
                        : <>Sign In <i className="bi bi-arrow-right ms-2" /></>
                        }
                    </button>
                </form>
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