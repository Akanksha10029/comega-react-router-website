import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="nav-logo">
                <div className="logo-icon">CM</div>
                <h2>CoMega<span>.</span></h2>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <Link to="/" className="nav-link active">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            {/* Authentication Buttons */}
            <div className="nav-buttons">
                <Link to="/login" className="login-btn">
                    Log In
                </Link>

                <Link to="/signup" className="signup-btn">
                    Get Started <span>→</span>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar