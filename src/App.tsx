import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import CardTiltEffect from './components/cards/3d-card-tilt-effect/cardTiltEffect';
import { useResponsiveTSX } from './useResponsiveTSX';
import FlipCard3dEffects from './components/cards/3d-flip-card-hover-effects/FlipCardHover3dEffects';

function App() {

  const breakpoint = useResponsiveTSX([600, 900, 1200]);

  return (
    <>
      {breakpoint > 0 &&
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="React-Component-Library" element={<Home />} />
            <Route path="React-Component-Library/3d-card-tilt-effect" element={<CardTiltEffect />} />
            <Route path="React-Component-Library/3d-flip-card-hover-effects" element={<FlipCard3dEffects/>} />
          </Routes>
        </BrowserRouter>}
    </>
  )
}

export default App