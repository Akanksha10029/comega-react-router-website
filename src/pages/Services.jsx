import React from 'react'
import './Services.css'

const Services = () => {

    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Modern, responsive and high-performance websites built with the latest technologies.'
        },
        {
            icon: '📱',
            title: 'App Development',
            description: 'User-friendly mobile applications designed to deliver seamless experiences.'
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive interfaces focused on user experience and accessibility.'
        },
        {
            icon: '⚡',
            title: 'Performance Optimization',
            description: 'Improve application speed, performance and overall user experience.'
        },
        {
            icon: '☁️',
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment solutions for modern applications.'
        },
        {
            icon: '🔒',
            title: 'Security Solutions',
            description: 'Protect applications and data with modern security practices.'
        }
    ]

    return (
        <div className="services-container">

            <section className="services-header">

                <span>WHAT WE OFFER</span>

                <h1>Our <span>Services</span></h1>

                <p>
                    Explore our services designed to transform your ideas
                    into powerful digital experiences.
                </p>

            </section>

            <section className="services-grid">

                {services.map((service, index) => (

                    <div className="service-card" key={index}>

                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h2>{service.title}</h2>

                        <p>{service.description}</p>

                        <a href="/contact">
                            Learn More →
                        </a>

                    </div>

                ))}

            </section>

        </div>
    )
}

export default Services
