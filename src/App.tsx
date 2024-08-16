import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import CardTiltEffect from './components/cards/3d-card-tilt-effect/cardTiltEffect';

function App() {

  // const breakpoint = useResponsiveTSX([600, 900, 1200]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="React-Component-Library" element={<Home />} />
        <Route path="React-Component-Library/3d-card-tilt-effect" element={<CardTiltEffect />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App