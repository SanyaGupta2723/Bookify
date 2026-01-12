import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Contact() {
  return (
    
    <section className="relative bg-black text-white">
        <NavBar />

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


      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          We look forward to hear from you
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ===== MAP ===== */}
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              className="w-full h-[320px] grayscale invert"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69580.98143592091!2d80.95813961969844!3d26.760461364848684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768236968847!5m2!1sen!2sin" width="600" height="450"
            />
          </div>

          {/* ===== FORM ===== */}
          <form className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>

            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-indigo-400"
            />

            <textarea
              rows="4"
              placeholder="Your message"
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

        {/* ===== BOTTOM TEXT ===== */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-300">
            Let’s work together and make <br />
            <span className="text-white font-semibold">
              something that matters.
            </span>
          </p>
        </div>

        {/* ===== INFO ROW ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center">

          <div>
            <p className="text-indigo-400 mb-1">Location</p>
            <p className="text-sm text-gray-400">
              45 Park Avenue, New York
            </p>
          </div>

          <div>
            <p className="text-indigo-400 mb-1">Contact</p>
            <p className="text-sm text-gray-400">
              +1 234 567 890
            </p>
          </div>

          <div>
            <p className="text-indigo-400 mb-1">Email Address</p>
            <p className="text-sm text-gray-400">
              hello@bookify.com
            </p>
          </div>

          <div>
            <p className="text-indigo-400 mb-1">Follow Us</p>
            <div className="flex justify-center gap-4 text-gray-400">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full h-px bg-white/60 mt-20" />
      
     <Footer />
    </section>
    
  );
  
}

export default Contact;
