import { useState } from 'react';
import './App.css';
import Map from './Map';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Layout from './router/Layout'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;