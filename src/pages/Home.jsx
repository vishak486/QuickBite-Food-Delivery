import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div key="1" className="page-section active" id="page-home">
    <section className="hero-min-vh d-flex align-items-center bg-dark">
        <div className="container py-5">
        <div className="row align-items-center g-5">
            <div className="col-lg-6">
            <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-circle-fill me-1"
                style={{
                    fontSize: "8px",
                }}
                />{" "}
                Now delivering in 30+ cities
            </span>
            <h1 className="font-brand display-4 fw-bold lh-sm mb-3">
                Cravings Delivered
                <br />
                <span className="text-primary">Fast & Fresh.</span>
            </h1>
            <p className="text-secondary fs-5 mb-4">
                Order from your favourite restaurants, track in real-time, and enjoy
                hot meals at your doorstep.
            </p>
            <div className="d-flex gap-3 flex-wrap">
                <a className="btn btn-primary btn-lg px-4" href="#">
                <i className="bi bi-search me-2" />
                Explore Restaurants
                </a>
                <Link to={'/about'} className="btn btn-outline-secondary btn-lg px-4">
                Learn More <i className="bi bi-arrow-right ms-1" />
                </Link>
            </div>
            <div className="row g-4 mt-4 pt-4 border-top border-secondary">
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-white">500+</div>
                <small className="text-secondary">Restaurants</small>
                </div>
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-white">50K+</div>
                <small className="text-secondary">Customers</small>
                </div>
                <div className="col-4 text-center">
                <div className="font-brand fw-bold fs-2 text-white">4.8★</div>
                <small className="text-secondary">Avg Rating</small>
                </div>
            </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="bg-secondary bg-opacity-10 border border-secondary rounded-4 d-flex align-items-center justify-content-center"
                style={{fontSize: "7rem",height: "380px",width: "380px",}}>
                <img className='img-fluid rounded' src="https://assets.epicurious.com/photos/6578de36ecbf1eb72c2d7350/1:1/w_1024,c_limit/quick-skillet-chicken-parmesan-gnocchi_RECIPE_120723_0124_VOG_final.jpg" alt="" />
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="py-5 bg-black bg-opacity-25">
        <div className="container">
        <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark border rounded-3 p-4 h-100">
                <div className="fs-2 mb-3">⚡</div>
                <h6 className="font-brand text-white fw-bold">30-Min Delivery</h6>
                <small className="text-secondary">
                Fast riders, hot food guaranteed
                </small>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark border rounded-3 p-4 h-100">
                <div className="fs-2 mb-3">🔒</div>
                <h6 className="font-brand text-white fw-bold">Secure Payments</h6>
                <small className="text-secondary">
                Razorpay protected checkout
                </small>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark border rounded-3 p-4 h-100">
                <div className="fs-2 mb-3">📍</div>
                <h6 className="font-brand text-white fw-bold">Live Tracking</h6>
                <small className="text-secondary">Real-time order updates</small>
            </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="card bg-dark border rounded-3 p-4 h-100">
                <div className="fs-2 mb-3">⭐</div>
                <h6 className="font-brand text-white fw-bold">Top Restaurants</h6>
                <small className="text-secondary">
                Curated & verified partners
                </small>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="py-5">
        <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
            <p className="text-primary small fw-semibold text-uppercase letter-spacing mb-1">
                Top Picks
            </p>
            <h2 className="font-brand fw-bold mb-0">Popular Restaurants</h2>
            </div>
            <a className="btn btn-outline-secondary btn-sm" href="#">
            View All <i className="bi bi-arrow-right" />
            </a>
        </div>
        <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
            <div className="card bg-dark h-100">
                <div className="restaurant-img rounded-top">🍔</div>
                <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <h6 className="font-brand fw-bold mb-0">Burger Palace</h6>
                    <span className="badge bg-primary">🔥 Popular</span>
                </div>
                <small className="text-secondary d-block mb-2">
                    American · Fast Food · ₹150–₹400
                </small>
                <small className="text-warning">★★★★★</small>
                <small className="text-secondary ms-1">4.9 · 25–35 min</small>
                </div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-4">
            <div className="card bg-dark h-100">
                <div className="restaurant-img rounded-top">🍕</div>
                <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <h6 className="font-brand fw-bold mb-0">Pizza Fiesta</h6>
                    <span className="badge bg-success">New</span>
                </div>
                <small className="text-secondary d-block mb-2">
                    Italian · Pizza · ₹200–₹600
                </small>
                <small className="text-warning">★★★★½</small>
                <small className="text-secondary ms-1">4.7 · 30–40 min</small>
                </div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-4">
            <div className="card bg-dark h-100">
                <div className="restaurant-img rounded-top">🍜</div>
                <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <h6 className="font-brand fw-bold mb-0">Noodle House</h6>
                </div>
                <small className="text-secondary d-block mb-2">
                    Asian · Noodles · ₹120–₹350
                </small>
                <small className="text-warning">★★★★★</small>
                <small className="text-secondary ms-1">4.8 · 20–30 min</small>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="py-5">
        <div className="container">
        <div className="bg-primary rounded-4 p-5">
            <div className="row align-items-center">
            <div className="col-lg-8">
                <h2 className="font-brand fw-bold text-white mb-2">
                Hungry right now?
                </h2>
                <p className="text-white text-opacity-75 mb-0">
                Over 500 restaurants ready to serve you. Order in seconds.
                </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <a className="btn btn-light fw-bold px-4 py-2" href="#">
                Order Now →
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home