import React, { useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { fetchAllRestaurants } from '../redux/slices/restaurantSlice'

const AdminManageRestaurants = () => {
  const dispatch=useDispatch()
  const {restaurantList,loading}=useSelector(state=>state.restaurant)
useEffect(()=>{
  dispatch(fetchAllRestaurants())
},[])

console.log(restaurantList);

  return (
    <>
    <AdminSidebar title="Restaurants"/>
    <div className="main-content">
             {/* ════ RESTAURANTS PAGE ════ */}
      <div id="page-restaurants" className="page p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h6 className="fw-bold mb-0">All Restaurants</h6>
          <div className="d-flex gap-2 flex-wrap">
            <input type="text" className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Search restaurants..." style={{width: '200px'}} />
          </div>
        </div>
        {
          loading && (
            <div className="text-center">
              <Spinner animation="border" variant="secondary"/>
            </div>
          )
        }

        <div className="card bg-dark border">
          <div className="table-responsive">
            <table className="table table-dark table-borderless align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>Restaurant</th>
                  <th>Owner</th>
                  <th>Cuisine</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                restaurantList.length>0?(
                      restaurantList.map(rest=>(
                         
                          <tr key={rest._id} className="border-bottom border-secondary border-opacity-25">
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <div className="bg-secondary bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', fontSize: '1.3rem'}}>🍔</div>
                                <div>
                                  <div className="small fw-semibold">{rest.name}</div>
                                  <small className="text-secondary">{rest.address.city}</small>
                                </div>
                              </div>
                            </td>
                            <td className="small">
                              {rest.owner?.name || "N/A"} <br/>
                              <small className="text-secondary">{rest.owner?.email}</small>
                            </td>
                            <td className="small">
                              {rest.cuisine}
                            </td>
                            <td>
                               <span className={`badge ${rest.isActive ? "bg-success" : "bg-danger"}`}>
                                {rest.isActive ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex gap-1">
                                <button className="btn btn-outline-secondary btn-sm">View</button>
                                <button className="btn btn-danger btn-sm">
                                  {rest.isActive ? "Block" : "Unblock"}
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                        
                      ))
                )
                :(
                  <tr>
                     <td colSpan="5" className="text-secondary text-center">
                       No restaurants found...
                      </td>
                  </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default AdminManageRestaurants