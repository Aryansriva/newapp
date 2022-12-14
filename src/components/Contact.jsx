import React from 'react'
import "../styles/contact.scss";

function Contact() {
  return (
    <div className="contactUs">
      <main>
      <h1>Contact Us</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text"  required placeholder="Enter Your Name"/>
            </div>
            <div>
                <label>Email </label>
                <input type="email"  required placeholder="Enter Your Email"/>
            </div>
            <div>
                <label>Subject </label>
                <input type="text"  required placeholder="Enter Your Query Subject"/>
            </div>
            <div>
                <label>Message</label>
                <input type="text"  required placeholder="Tell Us About Your Query..."/>
            </div>
        <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact
