// Appointment.js
import React, { useState } from 'react';
import './Appointment.css';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your logic to handle the form submission, such as sending data to a server
    setSubmitted(true);
  };

  return (
    <section id="appointment">
      <div className="appointment-container">
        <h2>Book an Appointment</h2>
        {submitted ? (
          <p className="confirmation-message">Your appointment is confirmed!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

            <label htmlFor="date">Preferred Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

            <label htmlFor="message">Additional Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Appointment;
