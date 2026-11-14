import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-container">

            <section className="about-header">
                <span>WHO WE ARE</span>
                <h1>About <span>CoMega</span></h1>

                <p>
                    We believe technology should make life simpler,
                    smarter, and more meaningful.
                </p>
            </section>

            <section className="about-content">

                <div className="about-box">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create innovative digital experiences
                        that solve real-world problems and help people grow.
                        We focus on creativity, quality, and continuous learning.
                    </p>
                </div>

                <div className="about-box">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where technology connects people,
                        creates opportunities, and makes everyday experiences
                        more accessible and efficient.
                    </p>
                </div>

            </section>

            <section className="about-values">

                <h2>What Makes Us Different?</h2>

                <div className="values-grid">

                    <div className="value-card">
                        <span>🚀</span>
                        <h3>Innovation</h3>
                        <p>We constantly explore new ideas and technologies.</p>
                    </div>

                    <div className="value-card">
                        <span>💡</span>
                        <h3>Creativity</h3>
                        <p>We believe every great solution starts with an idea.</p>
                    </div>

                    <div className="value-card">
                        <span>🤝</span>
                        <h3>Collaboration</h3>
                        <p>We achieve better results by working together.</p>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default About
