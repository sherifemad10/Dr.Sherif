"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.modules.scss";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled before proceeding
    if (name && phone && message && age) {
      const phoneNumber = "+201210587417";
      const url = `https://wa.me/${phoneNumber}?text=Name: ${encodeURIComponent(
        name
      )}
        %0APhone: ${encodeURIComponent(phone)}
        %0AAge: ${encodeURIComponent(age)}
        %0AMessage: ${encodeURIComponent(message)}`;

      // Open WhatsApp with the URL
      window.open(url);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="Contact" id="contact">
      <h2 data-aos="fade-down">Contact Us</h2>

      <div className="contact-container" data-aos="fade-up">
        <div className="location" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54968.27449896331!2d30.96746516005181!3d30.56294316433882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d68b68933ea3%3A0x77434af2db2fa06f!2sShebeen%20El-Kom%2C%20Qism%20Shebeen%20El-Kom%2C%20Shibin%20el%20Kom%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1738786898134!5m2!1sen!2seg"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-form" data-aos="fade-right">
          <h5>Contact Us</h5>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="phone">Your Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label htmlFor="age">Your Age</label>
            <input
              type="number"
              id="age"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" data-aos="zoom-in-up">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
