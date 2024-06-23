// About.jsx
// About.jsx

import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import profileImage from '../styles/ProfileImage.jpg'; // replace with your actual image path

function About() {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    // Simulate typing effect
    const text = "Undergraduate student pursuing a Bachelor's degree in Computer Science at Canara Engineering College. Passionate about software development with proficiency in Java, Python, and web technologies. Demonstrated skills in building robust applications such as an Expense Management System and a Bank Application REST API. Actively engaged in data analytics simulations and agile project management. Seeking opportunities to contribute and grow in the field of software engineering.";
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setAboutText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <h1 className='about-heading'>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            {aboutText}
          </p>
        </div>
        <div className="about-image">
          { <img src={profileImage} alt="Profile" /> }
        </div>
      </div>

      <div className="skills-container">
        <h2>Skills</h2>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
        <ul className="skills">
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
          <li>Spring 6</li>
          <li>Data JPA</li>
          <li>JSP</li>
        </ul>
      </div>

      <div className="certifications-container">
        <h2>Certifications</h2>
        <ul className="certifications">
          <li><a href="https://coursera.org/share/e67411d2a0c4ea975b6fb03ce339d74d">Getting Started with Git and GitHub</a></li>
          <li><a href="https://coursera.org/share/d80bf592c7143e2e36cd2a94fb40eb8d">HTML, CSS, and Javascript for Web Developers</a></li>
          <li><a href="https://coursera.org/share/0f40670e2b36468c8ad823850bb23eda">Developing Front-End Apps with React</a></li>
          <li><a href="https://coursera.org/share/73b2c02c10a7d85b8409a2cd0200813f">Developing Back-End Apps with Node.js and Express</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;

