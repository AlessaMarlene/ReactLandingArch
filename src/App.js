import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/Abouts';
import Contact from "./Components/Contact/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="contentWrapper">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route element={<Portfolio/>} path='/portfolio'/>
                <Route element={<About/>} path='/about'/>
                <Route element={<Contact/>} path='/contact'/>
                <Route path="*" element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;