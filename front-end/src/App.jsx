import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import Home from './pages/Home';
import Western from './pages/Western';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Jewellery from './pages/Jewellery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/western" element={<Western />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/jewellery" element={<Jewellery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
