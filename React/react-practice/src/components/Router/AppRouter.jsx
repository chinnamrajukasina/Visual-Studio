// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const AppRouter = () => (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <h2>path="/"for Router Home page</h2>
      <h2>path="/about" for Router About page</h2>
      <h2>path="/contact"for Router Contact page</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
