import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="page-section" id="page-contact">
    <section className="py-5">
        <div className="container py-4">
        <div className="text-center mb-5">
            <p className="text-primary small fw-semibold text-uppercase mb-1">
            Get In Touch
            </p>
            <h1 className="font-brand display-5 fw-bold">
            We'd love to hear <span className="text-primary">from you.</span>
            </h1>
            <p className="text-secondary mt-2">
            Have a question, feedback, or partnership inquiry?
            </p>
        </div>
        <div className="row g-4">
            <div className="col-lg-4">
            <div className="card bg-dark h-100 p-4">
                <h6 className="font-brand fw-bold mb-4">Contact Information</h6>
                <div className="d-flex gap-3 mb-4">
                <div className="btn btn-primary btn-sm rounded-3 px-2">
                    <i className="bi bi-geo-alt-fill" />
                </div>
                <div>
                    <div className="fw-semibold small">Address</div>
                    <small className="text-secondary">
                    42 Tech Park, Bengaluru, Karnataka – 560001
                    </small>
                </div>
                </div>
                <div className="d-flex gap-3 mb-4">
                <div className="btn btn-primary btn-sm rounded-3 px-2">
                    <i className="bi bi-telephone-fill" />
                </div>
                <div>
                    <div className="fw-semibold small">Phone</div>
                    <small className="text-secondary">+91 98765 43210</small>
                </div>
                </div>
                <div className="d-flex gap-3 mb-4">
                <div className="btn btn-primary btn-sm rounded-3 px-2">
                    <i className="bi bi-envelope-fill" />
                </div>
                <div>
                    <div className="fw-semibold small">Email</div>
                    <small className="text-secondary">hello@quickbite.in</small>
                </div>
                </div>
                <div className="d-flex gap-3 mb-4">
                <div className="btn btn-primary btn-sm rounded-3 px-2">
                    <i className="bi bi-clock-fill" />
                </div>
                <div>
                    <div className="fw-semibold small">Support Hours</div>
                    <small className="text-secondary">
                    Mon–Sun, 8 AM – 11 PM IST
                    </small>
                </div>
                </div>
                <div className="d-flex gap-2 mt-auto">
                <a className="btn btn-sm btn-outline-secondary" href="#">
                    <i className="bi bi-instagram" />
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">
                    <i className="bi bi-twitter-x" />
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">
                    <i className="bi bi-linkedin" />
                </a>
                </div>
            </div>
            </div>
            <div className="col-lg-8">
            <div className="card bg-dark p-4">
                <h6 className="font-brand fw-bold mb-4">Send us a message</h6>
                <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label small">First Name</label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-person" />
                    </span>
                    <input
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="John"
                        type="text"
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label small">Last Name</label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-person" />
                    </span>
                    <input
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Doe"
                        type="text"
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label small">Email</label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-envelope" />
                    </span>
                    <input
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="you@example.com"
                        type="email"
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label small">Phone</label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-secondary">
                        <i className="bi bi-telephone" />
                    </span>
                    <input
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                    />
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label small">Subject</label>
                    <input
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="How can we help?"
                    type="text"
                    />
                </div>
                <div className="col-12">
                    <label className="form-label small">Message</label>
                    <textarea
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="Tell us more..."
                    rows="5"
                    style={{
                        resize: "none",
                    }}
                    />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100 py-2 fw-bold">
                    Send Message <i className="bi bi-send ms-2" />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Contact