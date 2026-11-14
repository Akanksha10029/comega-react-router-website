import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">A</div>
                        <h2>CoMega<span>.</span></h2>
                    </div>

                    <p>
                        Building modern digital experiences with creativity,
                        technology and innovation.
                    </p>
                </div>


                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>


                {/* Resources */}
                <div className="footer-section">
                    <h3>Resources</h3>

                    <Link to="/blog">Blog</Link>
                    <Link to="/faq">FAQs</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>


                {/* Social Links */}
                <div className="footer-section">
                    <h3>Connect With Us</h3>

                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        GitHub
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        Instagram
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                </div>

            </div>


            {/* Bottom Footer */}
            <div className="footer-bottom">

                <p>© 2026 CoMega. All rights reserved.</p>

                <p>Designed with <span>♥</span> and creativity.</p>

            </div>

        </footer>
    )
}

export default Footer