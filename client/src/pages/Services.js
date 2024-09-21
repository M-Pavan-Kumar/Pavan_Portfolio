import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faVideo, faEdit, faPencilAlt, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const services = [
  {
    icon: faCode,
    title: "Web Development",
    description: "Creating responsive and dynamic websites using modern frameworks and technologies."
  },
  {
    icon: faVideo,
    title: "Content Creation",
    description: "Producing engaging and high-quality content for various digital platforms."
  },
  {
    icon: faEdit,
    title: "Video Editing",
    description: "Professional video editing services to enhance your visual content."
  },
  
  {
    icon: faDatabase,
    title: "Database Management",
    description: "Efficient database design, implementation, and management for your projects."
  }
];

function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;