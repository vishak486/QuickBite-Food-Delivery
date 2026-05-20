import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantDashboardStats } from '../redux/slices/adminDashboardSlice'
import RestaurantSidebar from '../components/RestaurantSidebar'

const RestaurantDashboard = () => {
    const dispatch = useDispatch()
    const { restaurantStats: stats, loading } = useSelector((state) => state.adminDashboard)

    useEffect(() => {
        dispatch(getRestaurantDashboardStats())
    }, [dispatch])

    return (
        <>
            <RestaurantSidebar title="Dashboard" />
            <div className="rest-content p-4">
                <div className="row g-3 mb-4">

                    {/* Today's Orders */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="card bg-dark border p-3">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <small className="text-secondary">Today's Orders</small>
                                    <div className="fw-bold text-primary fs-3 mt-1">
                                        {loading ? '...' : stats?.todaysOrders ?? 0}
                                    </div>
                                </div>
                                <div className="btn btn-primary btn-sm rounded-3 px-2">
                                    <i className="bi bi-bag-check" />
                                </div>
                            </div>
                            <small className="text-success mt-2">
                                <i className="bi bi-arrow-up" /> Live count
                            </small>
                        </div>
                    </div>

                    {/* Today's Revenue */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="card bg-dark border p-3">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <small className="text-secondary">Today's Revenue</small>
                                    <div className="fw-bold text-success fs-3 mt-1">
                                        ₹{loading ? '...' : stats?.todaysRevenue ?? 0}
                                    </div>
                                </div>
                                <div className="btn btn-success btn-sm rounded-3 px-2">
                                    <i className="bi bi-currency-rupee" />
                                </div>
                            </div>
                            <small className="text-success mt-2">
                                <i className="bi bi-arrow-up" /> From paid orders today
                            </small>
                        </div>
                    </div>

                    {/* Pending Orders */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="card bg-dark border p-3">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <small className="text-secondary">Pending Orders</small>
                                    <div className="fw-bold fs-3 mt-1 text-warning">
                                        {loading ? '...' : stats?.pendingOrders ?? 0}
                                    </div>
                                </div>
                                <div className="btn btn-warning btn-sm rounded-3 px-2">
                                    <i className="bi bi-clock" />
                                </div>
                            </div>
                            <small className="text-warning mt-2">
                                <i className="bi bi-exclamation-circle" /> Needs attention
                            </small>
                        </div>
                    </div>

                    {/* Total Orders */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="card bg-dark border p-3">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <small className="text-secondary">Total Orders</small>
                                    <div className="fw-bold text-white fs-3 mt-1">
                                        {loading ? '...' : stats?.totalOrders ?? 0}
                                    </div>
                                </div>
                                <div className="btn btn-info btn-sm rounded-3 px-2">
                                    <i className="bi bi-bag" />
                                </div>
                            </div>
                            <small className="text-secondary mt-2">
                                <i className="bi bi-graph-up" /> All time
                            </small>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RestaurantDashboard