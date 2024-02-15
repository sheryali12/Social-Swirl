import React from 'react';
import './contact.scss';

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault(); 
  
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const topicSelect = document.getElementById('choose-topic');
  
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const topic = topicSelect.value;
  
    if(firstName ==='' || lastName ==='' ||email ==='' || topic==='Select One...') {
      alert('Please fill in all fields');
    } else {
      alert('Form Submitted Successfully');
  
      firstNameInput.value = '';
      lastNameInput.value = '';
      emailInput.value = '';
      topicSelect.value = 'Select One...';
    }   
  }

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch With Us</p>

      </div>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text">First Name</span>
            <input
              type="text"
              className="contact-input text"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text">Last Name</span>
            <input
              type="text"
              className="contact-input text"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text">Email</span>
            <input
              type="email"
              className="contact-input text"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="choose-topic" className="contact-label">
            <span className="text">Choose a topic</span>
            <select id="choose-topic" className="contact-input text" required>
              <option>Select One...</option>
              <option>Html</option>
              <option>Css</option>
              <option>Java</option>
              <option>Javascript</option>
              <option>React.JS</option>
              <option>Node.JS</option>
            </select>
          </label>
        </div>
        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
