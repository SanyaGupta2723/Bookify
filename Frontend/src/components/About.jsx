import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-base-100 text-white relative overflow-hidden">

      {/* 🔥 Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* 🏷️ Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-400">Kitabify</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A modern digital bookstore built for readers who love exploring stories,
            knowledge, and inspiration in one place.
          </p>
        </div>

        {/* 📚 Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Kitabify, our mission is to make reading accessible and enjoyable
              for everyone. We aim to create a seamless online platform where users
              can discover fiction and non-fiction books, explore detailed insights,
              and enjoy a secure and smooth experience.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              Why Kitabify?
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔️ Modern & Responsive UI</li>
              <li>✔️ Secure Authentication (JWT + OTP)</li>
              <li>✔️ Email Integration</li>
              <li>✔️ Smooth User Experience</li>
            </ul>
          </div>
        </div>

        {/* ⚡ Tech Stack Section */}
        <div className="bg-base-200 p-10 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-400">
            Technology Behind Kitabify
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">React.js</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">Node.js</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">Express.js</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">MongoDB</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">JWT Auth</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">bcrypt</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">Nodemailer</p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg hover:bg-indigo-500/10 transition">
              <p className="font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* 💬 Footer Message */}
        <div className="text-center mt-16 text-gray-400">
          <p>
            Built with ❤️ by the Kitabify Team — Bringing stories closer to you.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
