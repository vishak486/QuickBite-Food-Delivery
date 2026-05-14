import React, { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerOrderDetail, getCustomerOrders } from '../redux/slices/orderSlice'
import { SERVER_URL } from '../config'

const statusColors = {
    placed: "secondary",
    confirmed: "primary",
    preparing: "warning",
    out_for_delivery: "info",
    delivered: "success",
    cancelled: "danger",
};
const statusSteps = ["placed", "confirmed", "preparing", "out_for_delivery", "delivered"];

const CustomerOrders = () => {
    const dispatch = useDispatch()
    const { orders, selectedOrder: order, loading ,detailLoading } = useSelector((state) => state.order)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(getCustomerOrders())
    }, [dispatch])

    const currentStep = order ? statusSteps.indexOf(order.orderStatus) : -1

    const handleViewDetails = (orderId) => {
    dispatch(getCustomerOrderDetail(orderId))
    setShowModal(true)
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">My Orders</h2>

            {/* List loading */}
            {loading && orders.length === 0 && (
                <div className="text-center mt-5"><Spinner animation="border" /></div>
            )}

            {/* Empty state */}
            {!loading && orders.length === 0 && (
                <div className="text-center text-muted mt-5">
                    <h5>You have no orders yet.</h5>
                </div>
            )}

            {/* Orders List */}
            <div className="row g-3">
                {orders.map((o) => (
                    <div className="col-12" key={o._id}>
                        <div className="card shadow-sm">
                            <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <div>
                                    <h5 className="mb-1">{o.restaurant?.name}</h5>
                                    <small className="text-muted">
                                        {o.items.map(i => i.food?.name).join(", ")}
                                    </small>
                                    <div className="mt-1">
                                        <small className="text-muted">
                                            {new Date(o.createdAt).toLocaleDateString('en-IN', {
                                                day: 'numeric', month: 'short', year: 'numeric',
                                                hour: '2-digit', minute: '2-digit'
                                            })}
                                        </small>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="text-end">
                                        <div><strong>₹{o.totalAmount}</strong></div>
                                        <small className={`text-${o.paymentStatus === 'paid' ? 'success' : 'danger'}`}>
                                            {o.paymentStatus}
                                        </small>
                                    </div>
                                    <span className={`badge bg-${statusColors[o.orderStatus] || 'secondary'} fs-6`}>
                                        {o.orderStatus.replace(/_/g, ' ')}
                                    </span>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => handleViewDetails(o._id)}>
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Detail Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {detailLoading  || !order ? (
                        <div className="text-center py-4"><Spinner animation="border" /></div>
                    ) : (
                        <>
                            <p className="text-muted mb-3" style={{ fontSize: '0.8rem' }}>
                                Order ID: {order._id}
                            </p>

                            {/* Status Progress */}
                            {order.orderStatus !== 'cancelled' ? (
                                <div className="card shadow-sm mb-4">
                                    <div className="card-body">
                                        <h6 className="mb-3">Order Status</h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            {statusSteps.map((step, index) => (
                                                <div key={step} className="text-center flex-fill">
                                                    <div
                                                        className="rounded-circle mx-auto mb-1 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: 36, height: 36,
                                                            backgroundColor: index <= currentStep ? '#0d6efd' : '#e0e0e0',
                                                            color: 'white', fontSize: 14
                                                        }}>
                                                        {index <= currentStep ? '✓' : index + 1}
                                                    </div>
                                                    <small style={{ fontSize: '0.7rem' }}>
                                                        {step.replace(/_/g, ' ')}
                                                    </small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="alert alert-danger">This order was cancelled.</div>
                            )}

                            {/* Restaurant Info */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="mb-1">{order.restaurant?.name}</h5>
                                    <p className="mb-0 text-muted">{order.restaurant?.cuisine}</p>
                                    <p className="mb-0 text-muted">
                                        {order.restaurant?.address?.street}, {order.restaurant?.address?.city}
                                    </p>
                                </div>
                            </div>

                            {/* Items */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-3">Items Ordered</h6>
                                    {order.items.map((item) => (
                                        <div key={item._id} className="d-flex align-items-center mb-3">
                                            <img
                                                src={`${SERVER_URL}/uploads/foods/${item.food?.image}`}
                                                alt={item.food?.name}
                                                className="rounded me-3"
                                                style={{ width: 65, height: 65, objectFit: 'cover' }}
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
                                        <strong>₹{order.totalAmount}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h6 className="mb-2">Payment Info</h6>
                                    <p className="mb-1">
                                        Status: <span className={`fw-bold text-${order.paymentStatus === 'paid' ? 'success' : 'danger'}`}>
                                            {order.paymentStatus}
                                        </span>
                                    </p>
                                    <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                                        Payment ID: {order.razorpayPaymentId || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h6 className="mb-2">Delivery Address</h6>
                                    <p className="mb-0">
                                        {order.shippingAddress?.street}, {order.shippingAddress?.city},<br />
                                        {order.shippingAddress?.state} - {order.shippingAddress?.pincode}<br />
                                        {order.shippingAddress?.landmark && `Near: ${order.shippingAddress.landmark}`}
                                    </p>
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
    )
}

export default CustomerOrders