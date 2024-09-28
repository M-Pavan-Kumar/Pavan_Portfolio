import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      console.log('Sending request with data:', formData);
<<<<<<< HEAD
      const response = await fetch('https://pavan-portfolio-zjjv.onrender.com/api/send-email', {  // Changed this line
=======
     const response = await fetch('https://pavan-portfolio-0rar.onrender.com/api/send-email', {  
>>>>>>> f0e0e29dcb056b72b9b9eed0154deec707431198
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const text = await response.text();
      console.log('Response text:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        throw new Error('Invalid response from server');
      }

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><FontAwesomeIcon icon={faEnvelope} /> kpavan36668@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 8374678152</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pavan-kumar-maruboina-685765271/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/M-Pavan-Kumar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/Pavan_kumar5555" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder=" " value={formData.name} onChange={handleChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder=" " value={formData.email} onChange={handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" required placeholder=" " value={formData.message} onChange={handleChange}></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
