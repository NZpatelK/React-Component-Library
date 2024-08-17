import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import { useResponsiveTSX } from './useResponsiveTSX';
import { componentsData } from './data/componentsData';

function App() {

  const breakpoint = useResponsiveTSX([600, 900, 1200]);

  return (
    <>
      {breakpoint > 0 &&
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="React-Component-Library" element={<Home />} />

            {componentsData.map((component) => {
              return (
                <Route key={component.link} path={`React-Component-Library/${component.link}`} element={<component.component />} />
              )
            })}

          </Routes>
        </BrowserRouter>}
    </>
  )
}

export default App