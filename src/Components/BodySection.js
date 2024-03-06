import React from 'react'
import "../Styles/style.css"
import midImage from '../Assets/Images/pi2.gif'

const BodySection = () => {
    return (
        <>
            <div>
                {/* Body Section */}
                <section className="more-information-section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-md-12 col-lg-6 img-section">
                                <div className="text-center text-lg-start mb-5">
                                    <img src={midImage} alt='Not Dispaly' className="object-fit-contain image-flude " autoPlay></img>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center align-items-start">
                                <h1 className="text-capitalize mt-2 fw-bolder text-black common-heading">Reaholic Mediators</h1>
                                <p className="mt-3 mb-5 para-width text-black">Pepper CMP helps marketing teams ideate,
                                    create and distribute content fast and at scale with the power of generative AI and our expert talent network
                                    Reaholic Mediators is one of the best name in business of real estates. We provide a beautiful homes to our customers according to their expectations. We believe in quality and trust.We mainly focusing on trust, quality,innovative designs,budgets and on time delivery.Our vision is to achieve international standards in all businesses.Our mission is to become a most reputed company in real estate.
                                    </p>
                                <div className="text-center w-100 text-md-start">
                                    <button type="button" className="btn btn-primary px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Visit Now
                                    </button>
                                    {/* <button ><a href='/resume.pdf'>Download Resume</a></button> */}
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* Body Section */}
            </div>
        </>
    )
}

export default BodySection
