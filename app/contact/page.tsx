'use client';
import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="py-10 bg-[#F6F5FF]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center py-8">
          <h2 className="text-4xl font-semibold text-[#0D0E43]">Contact Us!</h2>
          <p className="text-lg text-gray-600 mt-4">Wed love to hear from you! Reach out to us for any inquiries.</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 bg-white p-8">
          {/* Content */}
          <div className="w-full md:w-1/2 max-w-lg">
            <h3 className="text-3xl font-semibold text-[#0D0E43] mb-4 text-center">Get in Touch</h3>
            <p className="text-gray-600 mb-6 text-center">
              Feel free to drop us a message, and we will get back to you as soon as possible. We value your feedback and inquiries.
            </p>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F509E] focus:border-[#3F509E]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F509E] focus:border-[#3F509E]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F509E] focus:border-[#3F509E]"
                />
              </div>
              <button
                className="w-full py-2 bg-[#3F509E] text-white rounded-md hover:bg-[#2C3A6C] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 max-w-xs">
            <Image
              src={'/Contact/contact.png'} // Replace with your image path
              alt="Contact Us"
              width={300}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
