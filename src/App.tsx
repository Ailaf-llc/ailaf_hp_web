import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaseOndo from './CaseOndo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/ondo" element={<CaseOndo />} />
    </Routes>
  );
}

export default App;