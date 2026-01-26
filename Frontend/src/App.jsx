import Home from './home/Home'
import Fiction from './Fiction/FictionPage'
import Signup from './components/Signup'
import Nonfiction from './components/Nonfiction'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Logout from "./pages/Logout";
import { Toaster } from "react-hot-toast";
import BrowseBooks from './pages/BrowseBooks';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      
      <Toaster position="top-right" />

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fiction" element={<Fiction />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Nonfiction" element={<Nonfiction />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/browsebooks" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-tracking" element={<OrderTracking />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
