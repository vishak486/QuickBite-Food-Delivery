import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchFoodsByRestaurant } from '../redux/slices/foodSlice'
import { SERVER_URL } from "../config"
import { Spinner } from 'react-bootstrap'


const RestaurantMenuDetails = () => {
    const dispatch=useDispatch()
    const { foodList, loading } = useSelector(state => state.food);
    const { user } = useSelector(state => state.auth);
    const {id}=useParams()
    useEffect(()=>{
        dispatch(fetchFoodsByRestaurant(id))
    },[dispatch,id])

  return (
    <>
    <section className='py-5'>
        <div className="container">
            <div className="mb-4 text-center">
                <h2 className="font-brand text-white fw-bold">Restaurant Menu</h2>
                <p className="text-secondary">Browse all available dishes below</p>
            </div>
            <div className="row g-4">
                    {
                        loading?(
                            <div className="text-center">
                                <Spinner animation='border' variant='secondary'/>
                            </div>
                        )
                        :foodList.length>0?(
                            foodList.map(food=>(
                                <div key={food._id} className="col-sm-6 col-lg-4">
                                    <div className="card bg-dark h-100 text-light">
                                        <img
                                            src={`${SERVER_URL}/uploads/foods/${food.image}`}
                                            alt={food.name}
                                            className="card-img-top"
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h5 className="fw-fold">{food.name}</h5>
                                             <p className="small text-secondary">{food.description}</p>
                                             <p className="fw-semibold">₹{food.price}</p>
                                             {user ? (
                                                <Link to={'/customer-cart'} className="btn btn-primary btn-sm">
                                                    Add to Cart
                                                </Link>
                                                ) : (
                                                <button className="btn btn-secondary btn-sm" disabled>
                                                    Login to Add
                                                </button>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                        :(
                            <p className="text-secondary">No foods available...</p>
                        )
                    }
            </div>
        </div>
    </section>
    </>
  )
}

export default RestaurantMenuDetails