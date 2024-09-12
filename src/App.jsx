import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import IceCream from './pages/IceCream';
import NonIceCream from './pages/NonIceCream';





function App() {
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icecream" element={<IceCream />} />
        <Route path="/nonicecream" element={<NonIceCream />} />

      </Routes>
    </Router>
    
  )
}

export default App
