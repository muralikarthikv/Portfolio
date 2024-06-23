import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import CSS file for styling

function Home() {
  return (
    <motion.div className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="hero-section"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-description">I'm a passionate developer ready to bring your ideas to life.</p>
        <Link to="/projects" className="btn-primary">View Projects</Link>
      </motion.div>
      <motion.div className="about-section"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <h2>About Me</h2>
        <p>Learn more about my background, skills, and experience.</p>
        <Link to="/about" className="btn-secondary">About Me</Link>
      </motion.div>
      <motion.div className="contact-section"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <h2>Contact Me</h2>
        <p>Let's connect! Reach out to discuss collaborations or just say hello.</p>
        <Link to="/contact" className="btn-secondary">Contact Me</Link>
      </motion.div>
    </motion.div>
  );
}

export default Home;
