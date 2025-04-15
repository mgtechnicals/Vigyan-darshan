'use client'

import { useState } from 'react';

export default function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32 relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          Have questions? We d love to hear from you!
        </p>
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-white font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-white font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-white font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-4 px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Send Message
            </button>
          </form>
          {status && <p className="text-center text-white mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
}
