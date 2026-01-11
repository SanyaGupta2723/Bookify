import Home from './home/Home'
import Fiction from './Fiction/FictionPage'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fiction" element={<Fiction />} />
      <Route path="/Signup" element={<Signup />} />
      
    </Routes>
  )
}

export default App
