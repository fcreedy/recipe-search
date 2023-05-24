import { Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import NotFound404 from './components/NotFound404'

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      
      </Routes>
    
    </div>
  );
}

export default App;
