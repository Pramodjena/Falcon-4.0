import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="bg-white p-4">
          <ul className="flex justify-around">
            <li>
              <Link to="/" className="text-black hover:text-gray-200">
                <img
                  className="w-[150px]"
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-black text-4xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black text-4xl">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black text-4xl">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
