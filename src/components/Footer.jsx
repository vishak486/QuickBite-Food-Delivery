import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bg-dark border-top border-secondary py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4">
            <div className="fw-bold fs-4 mb-2">
              Quick<span className="text-primary">Bite</span>
            </div>
            <p className="text-secondary small">
              Your favourite food, delivered fast. Connecting hungry people with great restaurants since 2024.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-sm btn-outline-secondary"><i className="bi bi-instagram"></i></a>
              <a href="#" className="btn btn-sm btn-outline-secondary"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="btn btn-sm btn-outline-secondary"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          <div className="col-sm-4 col-lg-2 offset-lg-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-secondary text-decoration-none small">About Us</Link></li>
              <li className="mt-2"><Link to="/contact" className="text-secondary text-decoration-none small">Contact</Link></li>
            </ul>
          </div>

          <div className="col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3">Partners</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none small">List Restaurant</a></li>
              <li className="mt-2"><a href="#" className="text-secondary text-decoration-none small">Delivery Partner</a></li>
            </ul>
          </div>

          <div className="col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none small">Privacy Policy</a></li>
              <li className="mt-2"><a href="#" className="text-secondary text-decoration-none small">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-top border-secondary mt-4 pt-3 d-flex justify-content-between flex-wrap gap-2">
          <small className="text-secondary">© 2024 QuickBite Marketplace. All rights reserved.</small>
          <small className="text-secondary">Built with ❤️ using MERN Stack</small>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer