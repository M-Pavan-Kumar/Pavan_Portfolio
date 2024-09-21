import React from 'react';
import '../styles/Service.css';

function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Node.js, and more.",
      icon: "🌐",
      color: "#4CAF50"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces and experiences.",
      icon: "🎨",
      color: "#2196F3"
    },
    {
      title: "Mobile App Development",
      description: "Building responsive and feature-rich mobile applications for iOS and Android.",
      icon: "📱",
      color: "#FF9800"
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility and ranking in search engine results.",
      icon: "🔍",
      color: "#E91E63"
    }
  ];

  return (
    <div className="service-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{backgroundColor: service.color}}>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
