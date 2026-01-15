import Home from './home/Home'
import Fiction from './Fiction/FictionPage'
import Signup from './components/Signup'
import Nonfiction from './components/Nonfiction'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Logout from "./pages/Logout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fiction" element={<Fiction />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Nonfiction" element={<Nonfiction />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />

      
    </Routes>
  )
}

export default App
