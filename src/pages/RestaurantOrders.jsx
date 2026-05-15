import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantOrders, updateOrderStatus } from '../redux/slices/orderSlice'
import { Spinner, Modal, Badge } from 'react-bootstrap'
import { SERVER_URL } from '../config'
import RestaurantSidebar from '../components/RestaurantSidebar'

const statusColors = {
    placed: "secondary",
    confirmed: "primary",
    preparing: "warning",
    out_for_delivery: "info",
    delivered: "success",
    cancelled: "danger",
};

const nextStatusOptions = {
    placed:           ["confirmed", "cancelled"],
    confirmed:        ["preparing", "cancelled"],
    preparing:        ["out_for_delivery", "cancelled"],
    out_for_delivery: ["delivered"],
    delivered:        [],
    cancelled:        [],
};

const RestaurantOrders = () => {
    const dispatch = useDispatch()
    const { restaurantOrders: orders, loading, statusUpdating } = useSelector((state) => state.order)
    const [showModal, setShowModal] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    useEffect(() => {
        dispatch(getRestaurantOrders())
    }, [dispatch])

    const handleViewDetails = (order) => {
        setSelectedOrder(order)
        setShowModal(true)
    }

    const handleStatusUpdate = async (orderId, newStatus) => {
        await dispatch(updateOrderStatus({ orderId, orderStatus: newStatus }))
        // update selectedOrder in modal too
        setSelectedOrder(prev => ({ ...prev, orderStatus: newStatus }))
    }

    return (
        <>
        <RestaurantSidebar title="Manage Orders"/>
        <div className="rest-content p-4">
            <h2 className="mb-4">Incoming Orders</h2>

            {loading && orders.length === 0 && (
                <div className="text-center mt-5"><Spinner animation="border" /></div>
            )}

            {!loading && orders.length === 0 && (
                <div className="text-center text-muted mt-5">
                    <h5>No orders yet.</h5>
                </div>
            )}

            <div className="row g-3">
                {orders.map((o) => (
                    <div className="col-12" key={o._id}>
                        <div className="card shadow-sm">
                            <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <div>
                                    <h6 className="mb-1 fw-bold">{o.user?.name}</h6>
                                    <small className="text-muted">{o.user?.email}</small>
                                    <div>
                                        <small className="text-muted">
                                            {o.items.map(i => `${i.food?.name} x${i.quantity}`).join(", ")}
                                        </small>
                                    </div>
                                    <small className="text-muted">
                                        {new Date(o.createdAt).toLocaleDateString('en-IN', {
                                            day: 'numeric', month: 'short', year: 'numeric',
                                            hour: '2-digit', minute: '2-digit'
                                        })}
                                    </small>
                                </div>

                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="text-end">
                                        <div><strong>₹{o.totalAmount}</strong></div>
                                        <small className={`text-${o.paymentStatus === 'paid' ? 'success' : 'danger'}`}>
                                            {o.paymentStatus}
                                        </small>
                                    </div>
                                    <Badge bg={statusColors[o.orderStatus] || 'secondary'} className="fs-6">
                                        {o.orderStatus.replace(/_/g, ' ')}
                                    </Badge>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => handleViewDetails(o)}>
                                        Manage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Detail + Status Update Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!selectedOrder ? null : (
                        <>
                            <p className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>
                                Order ID: {selectedOrder._id}
                            </p>

                            {/* Customer Info */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-2">Customer Info</h6>
                                    <p className="mb-1"><strong>{selectedOrder.user?.name}</strong></p>
                                    <p className="mb-1 text-muted">{selectedOrder.user?.email}</p>
                                    <p className="mb-0 text-muted">{selectedOrder.user?.phone || 'N/A'}</p>
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-2">Delivery Address</h6>
                                    <p className="mb-0">
                                        {selectedOrder.shippingAddress?.street}, {selectedOrder.shippingAddress?.city},<br />
                                        {selectedOrder.shippingAddress?.state} - {selectedOrder.shippingAddress?.pincode}<br />
                                        {selectedOrder.shippingAddress?.landmark && `Near: ${selectedOrder.shippingAddress.landmark}`}
                                    </p>
                                </div>
                            </div>

                            {/* Items */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-3">Items Ordered</h6>
                                    {selectedOrder.items.map((item) => (
                                        <div key={item._id} className="d-flex align-items-center mb-3">
                                            <img
                                                src={`${SERVER_URL}/uploads/foods/${item.food?.image}`}
                                                alt={item.food?.name}
                                                className="rounded me-3"
                                                style={{ width: 60, height: 60, objectFit: 'cover' }}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">{item.food?.name}</h6>
                                                <small className="text-muted">₹{item.price} × {item.quantity}</small>
                                            </div>
                                            <strong>₹{item.price * item.quantity}</strong>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <strong>Total</strong>
                                        <strong>₹{selectedOrder.totalAmount}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-2">Payment</h6>
                                    <p className="mb-0">
                                        Status: <span className={`fw-bold text-${selectedOrder.paymentStatus === 'paid' ? 'success' : 'danger'}`}>
                                            {selectedOrder.paymentStatus}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Status Update */}
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h6 className="mb-2">Update Order Status</h6>
                                    <p className="mb-2">
                                        Current: <Badge bg={statusColors[selectedOrder.orderStatus]}>
                                            {selectedOrder.orderStatus.replace(/_/g, ' ')}
                                        </Badge>
                                    </p>
                                    {nextStatusOptions[selectedOrder.orderStatus]?.length > 0 ? (
                                        <div className="d-flex gap-2 flex-wrap">
                                            {nextStatusOptions[selectedOrder.orderStatus].map((status) => (
                                                <button
                                                    key={status}
                                                    className={`btn btn-${statusColors[status]} btn-sm`}
                                                    disabled={statusUpdating}
                                                    onClick={() => handleStatusUpdate(selectedOrder._id, status)}>
                                                    {statusUpdating ? <Spinner animation="border" size="sm" /> : `Mark as ${status.replace(/_/g, ' ')}`}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-muted mb-0">No further status updates available.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}

export default RestaurantOrders