import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">

            <section className="hero-section">

                <div className="hero-content">

                    <span className="hero-tag">
                        ✨ Welcome to my porfolio
                    </span>

                    <h1>
                        Build Something <br />
                        <span>Amazing With me.</span>
                    </h1>

                    <p>
                        Discover innovative solutions, explore new possibilities,
                        and take your digital journey to the next level.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/services" className="hero-primary-btn">
                            Explore Services →
                        </Link>

                        <Link to="/about" className="hero-secondary-btn">
                            Learn More
                        </Link>
                    </div>

                </div>

                <div className="hero-visual">
                    <div className="hero-circle">
                        <span>CM</span>
                    </div>
                </div>

            </section>

            <section className="home-stats">

                <div className="stat-card">
                    <h2>100+</h2>
                    <p>Projects Completed</p>
                </div>

                <div className="stat-card">
                    <h2>50+</h2>
                    <p>Happy Clients</p>
                </div>

                <div className="stat-card">
                    <h2>24/7</h2>
                    <p>Customer Support</p>
                </div>

            </section>

        </div>
    )
}

export default Home