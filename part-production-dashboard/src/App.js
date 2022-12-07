import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<h1>Home</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
