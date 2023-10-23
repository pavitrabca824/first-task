import {  Routes, Route,BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    
    <BrowserRouter>
      
        <Header />
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      
    </BrowserRouter>
    </>
  );
}


export default App;
