import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Faq from "./pages/Faq";
import FirstSection from "./components/FirstSection";
// import SecondSection from "./components/SecondSection";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <BrowserRouter>
    <div className="w-full">
    <Navbar/>
    <FirstSection/>
    <Routes>
      {/* <Route index element={<FirstSection/>}/> */}
      {/* <Route index element={<SecondSection/>}/> */}
      {/* <Route path="/faq" element={<Faq/>}/> */}
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}


