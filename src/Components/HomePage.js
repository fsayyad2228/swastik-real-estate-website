import React from 'react'
import "../Styles/style.css"
import Footer from '../Partials/HeaderFooter/Footer'
import Navbar from '../Partials/NavSection/Navbar'
import ContactForm from '../Utils/ContactForm'
import HeroSection from '../Components/HeroSection'
import ServiceSection from '../Components/AboutSection'
import BodySection from '../Components/BodySection'
import ProductionSection from '../Components/ProductServiceSection'
import TestimonialSection from '../Components/TestimonialSection'
import ExpertOpenionSection from '../Components/ExpertOpenionSection'
function HomePage() {
  return (
    <>
      <div >
        <HeroSection />
        <ServiceSection />
        <BodySection />
        <ProductionSection />
        <TestimonialSection />
        <ExpertOpenionSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;