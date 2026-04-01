import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createRestaurantProfile } from '../redux/slices/restaurantSlice'

const RestaurantCreateProfile  = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const[profileData,setProfileData]=useState({
    restname:"",cuisine:"",description:"",image:"",street:"",city:"",state:"",pincode:""
  })
  console.log(profileData);
  

  const handleRestaurantSubmit=async(e)=>{
    e.preventDefault();
    const{restname,cuisine,description,image,street,city,state,pincode}=profileData
    if(restname && cuisine && description && image && street && city && state && pincode)
    {
      const formData= new FormData()
      formData.append("name",profileData.restname)
      formData.append("cuisine",profileData.cuisine)
      formData.append("description", profileData.description);
      formData.append("street", profileData.street);
      formData.append("city", profileData.city);
      formData.append("state", profileData.state);
      formData.append("pincode", profileData.pincode);
      formData.append('image',profileData.image)
      dispatch(createRestaurantProfile(formData))
      navigate("/restaurant")
    }
    else
    {
      alert("Please fill the form!!!")
    }
  }
  
  return (
    <>
     <div className="min-vh-100 d-flex align-items-center py-5 bg-dark text-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card bg-dark border p-4 p-md-5">

              {/* Header */}
              <div className="text-center mb-4">
                <div className="fw-bold text-white fs-3 mb-2">
                  Quick<span className="text-primary">Bite</span>
                </div>
                <h4 className="fw-bold text-white">Create Restaurant Profile</h4>
                <p className="text-secondary small">
                  Set up your restaurant to start receiving orders
                </p>
              </div>

              <form onSubmit={handleRestaurantSubmit}>
                <div className="row g-3">

                  {/* Restaurant Name */}
                  <div className="col-12">
                    <label className="form-label text-white small">Restaurant Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-shop" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="e.g. Burger Palace"
                        value={profileData.restname}
                        onChange={(e)=>setProfileData({...profileData,restname:e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Cuisine */}
                  <div className="col-sm-6">
                    <label className="form-label text-white small">Cuisine Type</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-egg-fried" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="e.g. American, Fast Food"
                        value={profileData.cuisine}
                        onChange={(e)=>setProfileData({...profileData,cuisine:e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-sm-6">
                    <label className="form-label text-white small">Description</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-card-text" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Short description"
                        value={profileData.description}
                        onChange={(e)=>setProfileData({...profileData,description:e.target.value})}
                      />
                    </div>
                  </div>
                  {/* Restaurant Image */}
                    <div className="col-12">
                    <label className="form-label text-white small">Restaurant Image</label>
                    <div className="input-group">
                        <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-image" />
                        </span>
                        <input
                        type="file"
                        accept="image/*"
                        className="form-control bg-dark text-light border-secondary"
                        onChange={(e)=>setProfileData({...profileData,image:e.target.files[0]})}
                        />
                    </div>
                    <small className="text-secondary">Upload a photo of your restaurant (JPG, PNG)</small>
                    </div>

                  {/* Address heading */}
                  <div className="col-12 mt-2">
                    <p className="text-secondary small fw-semibold text-uppercase mb-0">
                      <i className="bi bi-geo-alt me-1" /> Address Details
                    </p>
                    <hr className="border-secondary mt-2" />
                  </div>

                  {/* Street */}
                  <div className="col-12">
                    <label className="form-label text-white small">Street</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-signpost" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Street address"
                        value={profileData.street}
                        onChange={(e)=>setProfileData({...profileData, street:e.target.value})}
                      />
                    </div>
                  </div>

                  {/* City + State + Pincode */}
                  <div className="col-sm-5">
                    <label className="form-label text-white small">City</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="City"
                      value={profileData.city}
                      onChange={(e)=>setProfileData({...profileData,city:e.target.value})}
                    />
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label text-white small">State</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="State"
                      value={profileData.state}
                      onChange={(e)=>setProfileData({...profileData,state:e.target.value})}
                    />
                  </div>
                  <div className="col-sm-3">
                    <label className="form-label text-white small">Pincode</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="560001"
                      value={profileData.pincode}
                      onChange={(e)=>setProfileData({...profileData,pincode:e.target.value})}
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                      Create Profile <i className="bi bi-arrow-right ms-1" />
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RestaurantCreateProfile 