import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../redux/slices/orderSlice'
import AdminSidebar from '../components/AdminSidebar'
import { Spinner } from 'react-bootstrap'

const statusColors = {
    placed: "secondary",
    confirmed: "primary",
    preparing: "warning",
    out_for_delivery: "info",
    delivered: "success",
    cancelled: "danger",
};

const AdminManageAllOrders = () => {
    const dispatch = useDispatch()
    const { allOrders, loading } = useSelector((state) => state.order)

    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const ordersPerPage = 10

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

    // Filter by search and status
    const filtered = allOrders.filter((o) => {
        const matchesSearch =
            o._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.restaurant?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === 'all' || o.orderStatus === statusFilter
        return matchesSearch && matchesStatus
    })

    // Pagination
    const totalPages = Math.ceil(filtered.length / ordersPerPage)
    const paginated = filtered.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage)

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, statusFilter])

    return (
        <>
            <AdminSidebar title="All Orders" />
            <div className="main-content">
                <div id="page-orders" className="page p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                        <h6 className="fw-bold mb-0">All Orders</h6>
                        <div className="d-flex gap-2 flex-wrap">
                            <input
                                type="text"
                                className="form-control form-control-sm bg-dark text-light border-secondary"
                                placeholder="Search by ID, customer, restaurant..."
                                style={{ width: '250px' }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                className="form-select form-select-sm bg-dark text-light border-secondary"
                                style={{ width: 'auto' }}
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="all">All Status</option>
                                <option value="placed">Placed</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="preparing">Preparing</option>
                                <option value="out_for_delivery">Out for Delivery</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center mt-5"><Spinner animation="border" variant="light" /></div>
                    ) : (
                        <>
                            <div className="card bg-dark border">
                                <div className="table-responsive">
                                    <table className="table table-dark table-borderless align-middle mb-0">
                                        <thead className="border-bottom border-secondary">
                                            <tr className="text-secondary small">
                                                <th>Order ID</th>
                                                <th>Customer</th>
                                                <th>Restaurant</th>
                                                <th>Items</th>
                                                <th>Amount</th>
                                                <th>Payment</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginated.length === 0 ? (
                                                <tr>
                                                    <td colSpan="7" className="text-center text-secondary py-4">
                                                        No orders found.
                                                    </td>
                                                </tr>
                                            ) : (
                                                paginated.map((o) => (
                                                    <tr key={o._id} className="border-bottom border-secondary border-opacity-25">
                                                        <td className="small fw-semibold">
                                                            {o._id.slice(-6).toUpperCase()}
                                                        </td>
                                                        <td className="small">
                                                            <div>{o.user?.name || 'N/A'}</div>
                                                            <div className="text-secondary" style={{ fontSize: '0.75rem' }}>
                                                                {o.user?.email}
                                                            </div>
                                                        </td>
                                                        <td className="small">{o.restaurant?.name || 'N/A'}</td>
                                                        <td className="small text-secondary">
                                                            {o.items.map(i => `${i.food?.name} x${i.quantity}`).join(', ')}
                                                        </td>
                                                        <td className="small fw-semibold">₹{o.totalAmount}</td>
                                                        <td>
                                                            <span className={`badge bg-${o.paymentStatus === 'paid' ? 'success' : o.paymentStatus === 'failed' ? 'danger' : 'warning'}`}>
                                                                {o.paymentStatus}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className={`badge bg-${statusColors[o.orderStatus] || 'secondary'}`}>
                                                                {o.orderStatus.replace(/_/g, ' ')}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                                <small className="text-secondary">
                                    Showing {filtered.length === 0 ? 0 : (currentPage - 1) * ordersPerPage + 1}–{Math.min(currentPage * ordersPerPage, filtered.length)} of {filtered.length} orders
                                </small>
                                <nav>
                                    <ul className="pagination pagination-sm mb-0">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link bg-dark border-secondary text-light"
                                                onClick={() => setCurrentPage(p => p - 1)}>«</button>
                                        </li>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                                <button
                                                    className={`page-link border-secondary ${currentPage === i + 1 ? '' : 'bg-dark text-secondary'}`}
                                                    onClick={() => setCurrentPage(i + 1)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}>
                                            <button className="page-link bg-dark border-secondary text-light"
                                                onClick={() => setCurrentPage(p => p + 1)}>»</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminManageAllOrders