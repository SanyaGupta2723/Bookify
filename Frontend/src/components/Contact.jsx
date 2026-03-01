import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      toast.success("Message Sent Successfully 🚀", {
        theme: "dark",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message ❌", {
        theme: "dark",
      });
      console.error(error);
    }
  };

  return (
    <section className="relative bg-black text-white">

      {/* ===== HERO IMAGE ===== */}
      <div
        className="h-[20vh] w-full bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-vector/contact-us-customer-support-hotline-260nw-2402878041.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-5 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="w-full h-[2px] my-10 bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          We look forward to hear from you
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* MAP */}
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              className="w-full h-[320px] grayscale invert"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69580.98143592091!2d80.95813961969844!3d26.760461364848684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768236968847!5m2!1sen!2sin"
            />
          </div>

          {/* FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-indigo-400"
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-indigo-400"
            />

            <button
              type="submit"
              className="mt-6 px-8 py-3 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-black transition"
            >
              Submit
            </button>
          </form>

        </div>
      </div>

      {/* ✅ Toast Container (Very Important) */}
      <ToastContainer position="top-right" autoClose={3000} />

    </section>
  );
}

export default Contact;