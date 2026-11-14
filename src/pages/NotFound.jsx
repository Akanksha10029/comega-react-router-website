import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

// Generate random stars
const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `${Date.now()}-${Math.random()}-${i}`,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 4,
        direction: Math.random() > 0.5 ? 'topLeft' : 'topRight'
    }))
}

const NotFound = () => {

    const [stars, setStars] = useState([])

    useEffect(() => {

        // Generate initial stars
        setStars(generateStars(30))

        // Generate new stars every 4 seconds
        const interval = setInterval(() => {
            setStars((prev) => [
                ...prev.slice(-20),
                ...generateStars(10)
            ])
        }, 4000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div className="not-found-container">

            {/* Background Image */}
            <div className="space-background"></div>


            {/* Falling Stars */}
            <div className="stars-container">

                {stars.map((star) => (

                    <div
                        key={star.id}
                        className={`falling-star ${
                            star.direction === 'topLeft'
                                ? 'fall-top-left'
                                : 'fall-top-right'
                        }`}

                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`
                        }}
                    >

                        <div className="star"></div>

                    </div>

                ))}

            </div>


            {/* UFO */}
            <div className="ufo">

                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
                    alt="Floating UFO"
                />

            </div>


            {/* 404 Content */}
            <div className="not-found-content">

                <h1>404</h1>

                <p>
                    Oops! Looks like this page got lost in space.
                </p>

                <Link to="/" className="return-home-btn">
                    Return Home <span>→</span>
                </Link>

            </div>

        </div>

    )
}

export default NotFound
