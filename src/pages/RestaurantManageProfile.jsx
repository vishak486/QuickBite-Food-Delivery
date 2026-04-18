import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import RestaurantSidebar from '../components/RestaurantSidebar'
import { SERVER_URL } from '../config'
import { editRestaurantProfile, getMyRestaurant } from '../redux/slices/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'

const RestaurantManageProfile = () => {
    const dispatch=useDispatch()
    const {restaurant,loading}=useSelector((state)=>state.restaurant)
    const [profileData, setProfileData] = useState({
    name: "", cuisine: "", description: "", street: "",
    city: "", state: "", pincode: "", image: null
    })
     useEffect(() => {
    dispatch(getMyRestaurant())
    }, [dispatch])

     useEffect(() => {
    if (restaurant) {
      setProfileData({
        name: restaurant.name || "",
        cuisine: restaurant.cuisine || "",
        description: restaurant.description || "",
        street: restaurant.address?.street || "",
        city: restaurant.address?.city || "",
        state: restaurant.address?.state || "",
        pincode: restaurant.address?.pincode || "",
        image: null // keep empty until user uploads new file
      })
    }
  }, [restaurant])

  const handleSaveChanges=(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", profileData.name)
    formData.append("cuisine", profileData.cuisine)
    formData.append("description", profileData.description)
    formData.append("street", profileData.street)
    formData.append("city", profileData.city)
    formData.append("state", profileData.state)
    formData.append("pincode", profileData.pincode)
    if (profileData.image) {
      formData.append("image", profileData.image)
    }
    dispatch(editRestaurantProfile(formData))
    alert("Profile Updated Succesfully")
  }

  return (
    <>
      <RestaurantSidebar title="Manage Profile"/>
      <div className="rest-content p-4">
        <div className="card bg-dark border p-4 p-md-5">

          {/* Header */}
          <div className="text-center mb-4">
            <div className="fw-bold text-white fs-3 mb-2">
              Quick<span className="text-primary">Bite</span>
            </div>
            <h4 className="fw-bold text-white">Manage Restaurant Profile</h4>
            <p className="text-secondary small">
              Update your restaurant details and keep your profile up to date
            </p>
          </div>
          {
            loading &&(
                <div className="text-center">
                <Spinner animation="border" variant="secondary"/>
                </div>
            )
          }
          {
            restaurant && (
                <Form onSubmit={handleSaveChanges}>
                    <div className="row g-3">

                    {/* Restaurant Name */}
                    <div className="col-12">
                        <Form.Label className="text-white small">Restaurant Name</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.name}
                        onChange={(e)=>setProfileData({...profileData, name:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="e.g. Burger Palace"
                        />
                    </div>

                    {/* Cuisine */}
                    <div className="col-sm-6">
                        <Form.Label className="text-white small">Cuisine Type</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.cuisine}
                        onChange={(e)=>setProfileData({...profileData, cuisine:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="e.g. American, Fast Food"
                        />
                    </div>

                    {/* Description */}
                    <div className="col-sm-6">
                        <Form.Label className="text-white small">Description</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.description}
                        onChange={(e)=>setProfileData({...profileData, description:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="Short description"
                        />
                    </div>

                    {/* Restaurant Image */}
                    <div className="col-12">
                        <Form.Label className="text-white small">Restaurant Image</Form.Label>
                        {/* Preview existing image */}
                        {restaurant.image && (
                            <div className="mb-2">
                            <img
                                src={`${SERVER_URL}/uploads/others/${restaurant.image}`}
                                alt="Restaurant"
                                style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'cover',
                                borderRadius: '6px',
                                border: '1px solid #555'
                                }}
                            />
                            </div>
                        )}
                        <Form.Control
                        type="file"
                        accept="image/*"
                        className="bg-dark text-light border-secondary"
                        onChange={(e)=>setProfileData({...profileData, image:e.target.files[0]})}
                        />
                        <small className="text-secondary">
                        Upload a photo of your restaurant (JPG, PNG)
                        </small>
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
                        <Form.Label className="text-white small">Street</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.street}
                        onChange={(e)=>setProfileData({...profileData, street:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="Street address"
                        />
                    </div>

                    {/* City + State + Pincode */}
                    <div className="col-sm-5">
                        <Form.Label className="text-white small">City</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.city}
                        onChange={(e)=>setProfileData({...profileData, city:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="City"
                        />
                    </div>
                    <div className="col-sm-4">
                        <Form.Label className="text-white small">State</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.state}
                        onChange={(e)=>setProfileData({...profileData, state:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="State"
                        />
                    </div>
                    <div className="col-sm-3">
                        <Form.Label className="text-white small">Pincode</Form.Label>
                        <Form.Control
                        type="text"
                        value={profileData.pincode}
                        onChange={(e)=>setProfileData({...profileData, pincode:e.target.value})}
                        className="bg-dark text-light border-secondary"
                        placeholder="560001"
                        />
                    </div>

                    {/* Save Changes */}
                    <div className="col-12 mt-2">
                        <Button type="submit" variant="primary" className="w-100 py-2 fw-bold">
                        Save Changes <i className="bi bi-check-circle ms-1" />
                        </Button>
                    </div>

                    </div>
                </Form>
            )
          }

        </div>
      </div>
    </>
  )
}

export default RestaurantManageProfile
