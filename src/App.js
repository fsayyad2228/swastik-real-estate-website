import React from 'react'
import "./Styles/style.css"
import Footer from './Partials/HeaderFooter/Footer'
import Navbar from './Partials/NavSection/Navbar'
import ContactForm from './Utils/ContactForm'
import HeroSection from './Components/HeroSection'
import ServiceSection from './Components/AboutSection'
import BodySection from './Components/BodySection'
import ProductionSection from './Components/ProductServiceSection'
import TestimonialSection from './Components/TestimonialSection'
import ExpertOpenionSection from './Components/ExpertOpenionSection'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CursorPointer from './Utils/CursorPointer'
function App() {
  return (
    <>
    <CursorPointer/>
      <div >
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/hero" element={<HeroSection />}></Route>
          <Route path="/service" element={<ServiceSection />}></Route>
          <Route path="/body" element={<BodySection />}></Route>
          <Route path="/production" element={<ProductionSection />}></Route>
          <Route path="/testimonial" element={<TestimonialSection />}></Route>
          <Route path="/expert" element={<ExpertOpenionSection />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/footer" element={<Footer />}></Route>

        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;




// import React from 'react'
// import "./Styles/style.css"
// import Footer from './Partials/HeaderFooter/Footer'
// import Navbar from './Partials/NavSection/Navbar'
// import ContactForm from './Utils/ContactForm'
// import HeroSection from './Components/HeroSection'
// import ServiceSection from './Components/ServiceSection'
// import BodySection from './Components/BodySection'
// import ProductionSection from './Components/ProductionSection'
// import TestimonialSection from './Components/TestimonialSection'
// import ExpertOpenionSection from './Components/ExpertOpenionSection'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <div >
//         <Navbar />
//         <HeroSection />
//         <ServiceSection />
//         <BodySection />
//         <ProductionSection />
//         <TestimonialSection />
//         <ExpertOpenionSection />
//         <ContactForm />
//         <Footer />


//       </div>
//     </>
//   );
// }

// export default App;