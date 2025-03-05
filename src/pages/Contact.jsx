import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below or contact us using the information provided.</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="youremail@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@yourcompany.com</p>
          <p><strong>Address:</strong> 1234 Business Street, City, Country</p>
          <p>Our customer service team is available 24/7 to assist you with your inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
