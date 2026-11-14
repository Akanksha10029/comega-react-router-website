import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Contact Form Data:", formData)

        alert("Thank you! Your message has been submitted.")

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <div className="contact-container">

            {/* Header */}

            <section className="contact-header">

                <span>GET IN TOUCH</span>

                <h1>Let's Start a <span>Conversation</span></h1>

                <p>
                    Have a question, an idea, or just want to say hello?
                    We'd love to hear from you.
                </p>

            </section>


            {/* Contact Content */}

            <section className="contact-content">

                {/* Contact Information */}

                <div className="contact-info">

                    <h2>Let's Connect</h2>

                    <p className="contact-description">
                        Feel free to reach out to us. We're always happy
                        to discuss new projects and opportunities.
                    </p>

                    <div className="contact-detail">
                        <div className="contact-icon">📧</div>

                        <div>
                            <h3>Email</h3>
                            <p>hello@nexus.com</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <div className="contact-icon">📍</div>

                        <div>
                            <h3>Location</h3>
                            <p>Hyderabad, India</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <div className="contact-icon">📞</div>

                        <div>
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <h3>Follow Us</h3>

                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                    </div>

                </div>


                {/* Contact Form */}

                <div className="contact-form-container">

                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Your Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Subject</label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="What is this regarding?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Your Message</label>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <button type="submit" className="contact-submit-btn">
                            Send Message →
                        </button>

                    </form>

                </div>

            </section>

        </div>
    )
}

export default Contact
