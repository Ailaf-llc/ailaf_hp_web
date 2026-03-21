import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaseOndo from './CaseOndo';
import CaseRealLifeDesign from './CaseRealLifeDesign';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/ondo" element={<CaseOndo />} />
      <Route path="/case/reallife-design" element={<CaseRealLifeDesign />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
    </Routes>
  );
}

export default App;