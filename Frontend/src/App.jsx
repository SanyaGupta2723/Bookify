import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <NavBar />

      {/* PAGE CONTENT */}
      <main className="flex-grow">
        <Hero />
      </main>

      {/* LIGHT SEPARATOR */}
      <div className="w-full h-px bg-white/10"></div>

      {/* FOOTER (NORMAL FLOW) */}
      <Footer />
    </div>
  );
}

export default App;


