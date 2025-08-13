import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './componets/Navigation';
import Home from './pages/Home';
import Western from './pages/Western';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Jewellery from './pages/Jewellery';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Supplier from './pages/Supplier';
import './App.css';
import TopNavigation from './componets/TopNavigation';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    
  
    <Router>
    
      <div className="min-h-screen bg-gray-50">
        <TopNavigation/>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/western" element={<Western />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/cart" element={<Cart/>}/> 
           <Route path="/login" element={<Login/>}/>
          <Route path="/supplier" element={<Supplier/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
