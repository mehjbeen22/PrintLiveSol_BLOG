import React, { useState } from 'react';
import Disclaimer from './Disclaimer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Here you can implement your logic to handle form submission
      setFormSubmitted(true);
      // Reset form fields after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      // Reset error state
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <>
      <section className="bg-white text-black py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 border shadow-2xl p-4 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="mb-6 text-center">
            If you have any questions or inquiries, feel free to reach out to us
            using the form below.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 max-w-lg mx-auto border-black border-2 shadow-xl p-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:border-black"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 hover:bg-gray-900 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Disclaimer />
      {formError && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm text-center">
            <p className="text-red-500 text-sm mb-4">
              Please fill out all fields before submitting.
            </p>
            <button
              onClick={() => setFormError(false)}
              className="bg-black text-white py-2 px-4 hover:bg-gray-900 transition duration-300 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm text-center">
            <p className="mb-4">Your message has been sent!</p>
            <button
              onClick={closePopup}
              className="bg-black text-white py-2 px-4 hover:bg-gray-900 transition duration-300 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
