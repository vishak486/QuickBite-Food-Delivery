import React from 'react'

const RestaurantCreateProfile  = () => {
  return (
    <>
     <div className="min-vh-100 d-flex align-items-center py-5 bg-dark text-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card bg-dark border p-4 p-md-5">

              {/* Header */}
              <div className="text-center mb-4">
                <div className="fw-bold fs-3 mb-2">
                  Quick<span className="text-primary">Bite</span>
                </div>
                <h4 className="fw-bold">Create Restaurant Profile</h4>
                <p className="text-secondary small">
                  Set up your restaurant to start receiving orders
                </p>
              </div>

              <form>
                <div className="row g-3">

                  {/* Restaurant Name */}
                  <div className="col-12">
                    <label className="form-label small">Restaurant Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-shop" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="e.g. Burger Palace"
                      />
                    </div>
                  </div>

                  {/* Cuisine */}
                  <div className="col-sm-6">
                    <label className="form-label small">Cuisine Type</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-egg-fried" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="e.g. American, Fast Food"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-sm-6">
                    <label className="form-label small">Description</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-card-text" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Short description"
                      />
                    </div>
                  </div>
                  {/* Restaurant Image */}
                    <div className="col-12">
                    <label className="form-label small">Restaurant Image</label>
                    <div className="input-group">
                        <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-image" />
                        </span>
                        <input
                        type="file"
                        accept="image/*"
                        className="form-control bg-dark text-light border-secondary"
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
                    <label className="form-label small">Street</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-signpost" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  {/* City + State + Pincode */}
                  <div className="col-sm-5">
                    <label className="form-label small">City</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label small">State</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="State"
                    />
                  </div>
                  <div className="col-sm-3">
                    <label className="form-label small">Pincode</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="560001"
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