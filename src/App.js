import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Destination from './Pages/Destination';
import Testimonial from './Pages/Testimonial';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
