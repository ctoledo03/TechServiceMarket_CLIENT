import React from 'react';
import { BrowserRouter as Router, Route, Route } from 'react-router-dom';
import GettingStarted from './components/GettingStarted';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GettingStarted />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
