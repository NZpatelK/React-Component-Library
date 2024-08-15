import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'

function App() {

  // const breakpoint = useResponsiveTSX([600, 900, 1200]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="React-Component-Library" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App