import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
import Pavan from '../images/Pavan.jpg';
import Web from '../images/Web_developer.jpg';
import Mern from '../images/Mern_stack.jpg';
import AI from "../images/Ai_engineer.jpg"

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Pavan_kumar_maruboina_resume1.pdf'; // Update this path
    link.download = 'Pavan_kumar_Maruboina.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/pavan-kumar-maruboina-685765271/' },
    { icon: faGithub, url: 'https://github.com/M-Pavan-Kumar' },
    { icon: faTwitter, url: 'https://x.com/Pavan_kumar5555' },
    { icon: faInstagram, url: 'https://www.instagram.com/_pavan_kumar_555/' },
  ];

  const slides = [
    { title: "Web Developer", image: Web },
    { title: "Python developer", image: "https://thumbs.dreamstime.com/b/python-programming-language-programing-workflow-abstract-algorithm-concept-virtual-screen-200850656.jpg" },
    { title: "Mern Stack Developer", image: Mern },
    { title: "Aspiring AI/ML Engineer", image: AI },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);  // Add slides.length to the dependency array

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-container">
      <div className="background-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>
      <div className="content">
        <div className="intro-section">
          <div className="text-content">
            <h2 className="greeting">HELLO</h2>
            <h1 className="name">I'm <span className="highlight">Pavan Kumar</span></h1>
            <div className="carousel">
              <button className="carousel-btn prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <h2 className="role">{slides[activeSlide].title}</h2>
              <button className="carousel-btn next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="image-container">
            <div className="circular-image">
              <img src={Pavan} alt="Pavan Kumar" />
            </div>
          </div>
        </div>
        <p className="description">Passionate about creating amazing web experiences and solving complex problems through code.</p>
        <button className="download-cv" onClick={handleDownloadCV}>
          <FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV
        </button>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;