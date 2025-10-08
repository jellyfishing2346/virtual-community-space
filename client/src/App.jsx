import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LocationDetail from './pages/LocationDetail'
import AllEvents from './pages/AllEvents'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/events" element={<AllEvents />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
