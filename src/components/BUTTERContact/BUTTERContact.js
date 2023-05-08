import React, { useState } from "react";
import "./BUTTERContact.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message, file } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
      file: file.files[0], // Retrieve the uploaded file
    };
    console.log(conFom);
    sleep(2000).then(() => {
      setFormStatus("Send");
    });
    name.value = "";
    email.value = "";
    message.value = "";
    file.value = ""; // Clear the file input after submission
  };

  return (
    <div className="container">
      <h2 className="contactme">Contact Me</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="contactitem">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="contactitem">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="contactitem">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <div className="contactitem">
          <label className="form-label" htmlFor="file">
            File Upload
          </label>
          <input
            className="form-control"
            type="file"
            id="file"
            accept="image/*"
          />
          <small className="form-text text-muted">
            Upload inspiration picture or decor there etc.
          </small>
        </div>
        <button className="button-27" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;