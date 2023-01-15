import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <form>
        <h2>Ping Me !!</h2>
        <input placeholder="Email" />
        <input placeholder="Message" />
        <div>Send</div>
      </form>
    </div>
  );
}

export default Contact;
