// ContactUs.js
import React from 'react';

function ContactUs() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us:</p>
        <p>Phone: 1-800-HEALTHCARE</p>
        <p>Email: info@healthcare.com</p>
        <p>Address: 123 Health Street, Medical City, Healthland</p>
        <p>Connect with us on social media:</p>
        <div className="social-links">
          <a href="https://facebook.com/healthcare" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/healthcare" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/healthcare" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com/company/healthcare" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
