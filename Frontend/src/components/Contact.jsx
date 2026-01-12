import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-[#0f1115] text-white flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT : FORM */}
        <div>
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-400 mb-10">
            Have questions or feedback? We’d love to hear from you.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white resize-none"
            />

            <button
              type="submit"
              className="mt-6 w-full bg-gray-700 hover:bg-gray-600 transition py-3 rounded-md"
            >
              Send
            </button>
          </form>
        </div>

        {/* RIGHT : INFO */}
        <div className="space-y-8 mt-8 md:mt-0">
          <div>
            <h3 className="text-lg font-medium mb-2">Mail us</h3>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={18} />
              <span>contact@bookify.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Call us</h3>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Visit us</h3>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} />
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 pt-6 text-gray-400">
            <i className="hover:text-white cursor-pointer">Twitter</i>
            <i className="hover:text-white cursor-pointer">LinkedIn</i>
            <i className="hover:text-white cursor-pointer">GitHub</i>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
