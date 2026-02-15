export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Kitabify 📚
      </h1>

      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-6">
        Kitabify is a modern book discovery platform designed to help readers
        explore, review, and discover new books easily. Our goal is to make
        reading more accessible and enjoyable for everyone.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-400">
            To connect readers with books they love.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-400">
            Build a community of passionate readers.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-400">
            Easy search, clean UI, and personalized experience.
          </p>
        </div>
      </div>
    </div>
  );
}

