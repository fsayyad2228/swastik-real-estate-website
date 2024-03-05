import React from "react";
import "../Styles/style.css";
import Footer from "../Partials/HeaderFooter/Footer";
import Navbar from "../Partials/NavSection/Navbar";
import ContactForm from "../Utils/ContactForm";
import HeroSection from "../Components/HeroSection";
import ServiceSection from "../Components/AboutSection";
import BodySection from "../Components/BodySection";
import ProductionSection from "../Components/ProductServiceSection";
import TestimonialSection from "../Components/TestimonialSection";
import ExpertOpenionSection from "../Components/ExpertOpenionSection";
import CareerSection from "./CareerSection";
import FeedbackForm from "./FeedbackSection";
function HomePage() {
  return (
    <>
      <div>
        <HeroSection />
        <BodySection />
        <ServiceSection />
        <ProductionSection />
        <TestimonialSection />
        <ExpertOpenionSection />
        <CareerSection />
        <FeedbackForm />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
