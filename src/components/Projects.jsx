import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Expense Management System</h3>
          <p><strong>Technologies Used:</strong> MongoDB, Express.js, React, Node.js, Ant Design, RESTful APIs</p>
          <ul>
            <li>User authentication and authorization.</li>
            <li>Dynamic expense tracking with categorization and reporting features using Ant Design.</li>
            <li>Interactive dashboard providing visual representation of expenses using charts and graphs.</li>
            <li>CRUD operations for managing expenses, categories, and user profiles.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Bank Application REST API</h3>
          <p><strong>Technologies Used:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate, MySQL, Postman API</p>
          <ul>
            <li>Account Management: Engineered robust API endpoints to create, update, and retrieve bank accounts, enhancing data accuracy and operational efficiency by 40%, and reducing manual processing time by 25%.</li>
            <li>Transaction Management: Built features for depositing, withdrawing, and transferring funds between accounts.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Hospital Management System</h3>
          <p><strong>Technologies Used:</strong> PHP, MySQL, HTML, CSS, JavaScript, Bootstrap</p>
          <ul>
            <li>Engineered a comprehensive Hospital Management System that optimized patient management, appointment scheduling, staff coordination, and billing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
