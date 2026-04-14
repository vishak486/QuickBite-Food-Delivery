import React, { useEffect, useState } from 'react'
import RestaurantSidebar from '../components/RestaurantSidebar'
import { Link } from 'react-router-dom'
import RestaurantAddFood from '../components/RestaurantAddFood'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { fetchAllFoods, fetchEachFoodsCreatedByEachRestaurant } from '../redux/slices/foodSlice'
import { SERVER_URL } from "../config"
import RestaurantUpdateFood from '../components/RestaurantUpdateFood'


const RestaurantManageMenu = () => {
  const dispatch=useDispatch()
  const{ foodList,loading,error}=useSelector(state=>state.food)
  const [search,setSearch]=useState("")

  useEffect(()=>{
    dispatch(fetchEachFoodsCreatedByEachRestaurant(search))
  },[search])
  return (
    <>
        <RestaurantSidebar title="Manage Menu"/>
        <div className="rest-content p-4">
        {/* Header row with search + Add Food button */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control w-50"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search food items..."
          />
          <RestaurantAddFood/>
        </div>

        {loading && 
          <div className="text-center">
              <Spinner animation='border' variant='secondary'/>
          </div>
        }
        {/* Table */}
        <div className="card bg-dark border p-3">
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  foodList.length >0?(
                    foodList.map(food=>(
                      <tr key={food._id}>
                        <td className="small">{food.name}</td>
                        <td className="small">{food.description}</td>
                        <td className="small fw-semibold">₹{food.price}</td>
                        <td>
                          <img
                            src={food.image ? `${SERVER_URL}/uploads/foods/${food.image}` : "https://via.placeholder.com/70"}
                            alt={food.name}
                            style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        </td>
                        <td className="small">{food.category?.name}</td>
                        <td>
                          <span className={`badge ${food.isAvailable ? "bg-success" : "bg-danger"}`}>
                            {food.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <RestaurantUpdateFood food={food}/>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className="bi bi-trash" /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )
                  :(
                    <tr>
                      <td colSpan="7" className="text-secondary text-center">
                        No items found...
                      </td>
                    </tr>
                  )
                } 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantManageMenu