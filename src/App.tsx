import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaseOndo from './CaseOndo';
import CaseRealLifeDesign from './CaseRealLifeDesign';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/ondo" element={<CaseOndo />} />
      <Route path="/case/reallife-design" element={<CaseRealLifeDesign />} />
    </Routes>
  );
}

export default App;