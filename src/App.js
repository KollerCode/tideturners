import React from "react";
import "bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />}
            />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
