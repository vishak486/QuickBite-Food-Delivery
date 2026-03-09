import React from 'react'

const About = () => {
  return (
    <>
    <div className="page-section" id="page-about">
    <section className="py-5">
        <div className="container py-4">
        <div className="row align-items-center g-5">
            <div className="col-lg-6">
            <span className="badge bg-primary bg-opacity-25 text-primary rounded-pill px-3 py-2 mb-3">
                Our Story
            </span>
            <h1 className="font-brand display-5 fw-bold mb-3">
                We're on a mission to
                <br />
                <span className="text-primary">feed every craving.</span>
            </h1>
            <p className="text-secondary fs-5 lh-lg">
                QuickBite was built by food lovers who were tired of cold, late,
                disappointing deliveries. We created a platform that puts quality,
                speed, and transparency first.
            </p>
            <div className="row g-3 mt-3">
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-primary">500+</div>
                <small className="text-secondary">Restaurant Partners</small>
                </div>
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-primary">2M+</div>
                <small className="text-secondary">Orders Delivered</small>
                </div>
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-primary">30+</div>
                <small className="text-secondary">Cities Covered</small>
                </div>
            </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
            <div
                className="bg-secondary bg-opacity-10 border border-secondary rounded-4 d-flex align-items-center justify-content-center"
                style={{
                fontSize: "6rem",
                height: "300px",
                }}>
                🍽️
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="py-5 bg-black bg-opacity-25">
        <div className="container">
        <div className="text-center mb-5">
            <p className="text-primary small fw-semibold text-uppercase mb-1">
            Why Choose Us
            </p>
            <h2 className="font-brand fw-bold">Our Core Values</h2>
        </div>
        <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark h-100 p-4">
                <div className="fs-2 mb-3">⚡</div>
                <h6 className="font-brand fw-bold">Speed</h6>
                <p className="text-secondary small mb-0">
                Delivery within 30 minutes or less, every single time.
                </p>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark h-100 p-4">
                <div className="fs-2 mb-3">🌿</div>
                <h6 className="font-brand fw-bold">Quality</h6>
                <p className="text-secondary small mb-0">
                Only verified restaurants with consistent standards.
                </p>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark h-100 p-4">
                <div className="fs-2 mb-3">🔒</div>
                <h6 className="font-brand fw-bold">Trust</h6>
                <p className="text-secondary small mb-0">
                Secure payments, transparent tracking, honest reviews.
                </p>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark h-100 p-4">
                <div className="fs-2 mb-3">💚</div>
                <h6 className="font-brand fw-bold">Community</h6>
                <p className="text-secondary small mb-0">
                We support local restaurants grow digitally.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default About