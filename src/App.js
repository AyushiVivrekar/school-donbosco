import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarr from './components/Navbar/Navbarr';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import SchoolAdmissionPopup from './components/Popup/SchoolAdmissionPopup';
import Admission from './pages/admission/Admission';
import StickyNote from './components/StickyNote/StickyNote';
import Footer from './components/footer/Footer';
import Gallery from './pages/gallery/Gallery';
import ContactSection from './pages/contactUs/ContactSection';
import FacilitiesPage from './pages/facilities/FacilitiesPage';
import Academics from './pages/academic/Academics';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/header/Header';
import FooterSecond from './components/FooterSecond/FooterSecond';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <StickyNote />
        <SchoolAdmissionPopup />
        <Routes>
          <Route path="/" element={<><Header /><Navbarr /><Home /><Footer/></>} />
          <Route path="/home" element={<><Header /><Navbarr /><Home /><Footer/></>} />
          <Route path='/about' element={<><Navbarr /><AboutUs /><FooterSecond /></>} />
          <Route path='/admission' element={<><Navbarr /><Admission /><Footer/></>} />
          <Route path='/academics' element={<><Navbarr /><Academics /><FooterSecond /></>} />
          <Route path='/gallery' element={<><Navbarr /><Gallery /><FooterSecond /></>} />
          <Route path='/facilitiesPage' element={<><Navbarr /><FacilitiesPage /><Footer/></>} />
          <Route path='/contactus' element={<><Navbarr /><ContactSection /><FooterSecond /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;