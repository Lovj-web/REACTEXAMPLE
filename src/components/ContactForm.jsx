import React from 'react';

const ContactForm = ({ formData, setFormData }) => {
  // const { formData, setFormData } = props;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);
  return (
    <div>
      <h1>Contact Form</h1>
      <form className="form">
        <label htmlFor="name">Full Name</label>
        <input name="name" id="name" type="text" onChange={handleChange} />
        <label htmlFor="email">Email Address</label>
        <input name="email" id="name" type="email" onChange={handleChange} />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="name"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ContactForm;
