import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'; // Import CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6a18j3q', 'template_2u8xcs1', e.target, 'CN-7ReHB3SPvki2BV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Let's connect! Reach out to discuss collaborations or just say hello.</p>
      <div className="social-links">
        <a href="https://github.com/muralikarthikv" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/muralikarthikv/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://x.com/MuraliKarthikV1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
