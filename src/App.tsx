import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Routerは消す
import Home from './Home';
import CaseOndo from './CaseOndo';

function App() {
  return (
    // ここにあった <Router> を削除する
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/ondo" element={<CaseOndo />} />
    </Routes>
    // 閉じタグの </Router> も削除する
  );
}

export default App;