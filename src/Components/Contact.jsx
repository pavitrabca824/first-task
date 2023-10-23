import React, { useState } from 'react';
import InputField from './InputField';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic (add your own validation rules)

    // For simplicity, let's check if the Name field is empty
    if (!formData.name) {
      setErrors({ name: 'Name is required' });
      return;
    }

    // If there are no errors, you can submit the form data
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="container w-25  ">
      <h4 className='text-center mt-2'>Hi Fill Your Details</h4>
      <form onSubmit={handleSubmit} >
        <div className="py-4">
          
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          
        />
        </div>
        
        <div className="py-4">

        <InputField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          className="mt-4 mb-4 m-auto"
        />
        </div>
        <div className="py-4">

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        </div>
        <div className="form-group py-4">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary d-flex mt-2 mb-4 m-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

