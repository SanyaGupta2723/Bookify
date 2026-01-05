import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PopularBook from "./components/PopularBook";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <NavBar />
     

      
      <main className="flex-grow">
        <Hero />
        <PopularBook />
      </main>
      <div className="w-full h-px bg-white/10"></div>
      <Footer />
      
    </div>
  );
}

export default App;


