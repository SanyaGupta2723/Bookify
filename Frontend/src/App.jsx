import Home from './home/Home'
import Fiction from './Fiction/FictionPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiction" element={<Fiction />} />
      
    </Routes>
  )
}

export default App
