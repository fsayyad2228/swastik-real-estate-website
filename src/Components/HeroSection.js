import React from 'react'
import homeImage from '../Assets/Images/pi1.gif'
import "../Styles/style.css"
import CursorPointer from '../Utils/CursorPointer'

const HeroSection = () => {
    return (
        <>
            <div>
                {/* Hero Section */}
                <section className="bg-main bg-color hero-section">
        <CursorPointer/>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 mt-5 mt-lg-0 text-center text-lg-start order-lg-0 order-1 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                <h1 className="text-capitalize fw-bolder text-white">Hello, Welcome to Design World</h1>
                                <p className="mt-3 mb-4 para-width text-light-grey"> Discover the latest trends creating user-friendly interfaces, conducting usability testing, and enhancing the overall user experience.
                                best practices for HTML, CSS, JavaScript, React and Redux toolkit.
                                    {/* create and distribute content fast and at scale with the power of generative AI and our expert talent network */}
                                    </p>
                                <div className="text-center w-100 text-md-start">
                                <button type="button" className="btn btn-secondary mb-5 px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 order-lg-1 order-0 col-md-12 col-lg-6">
                                <div className="text-center text-lg-end">
                                    <img src={homeImage} alt='Not Dispaly' className="object-fit-contain hero-video--section" autoPlay></img>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1689170019">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </section>
                {/* Hero Section */}
            </div>
        </>
    )
}

export default HeroSection
