import react from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Home from './pages/Home';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Mentions" element={<Mentions/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
        </Routes>
    );
    }