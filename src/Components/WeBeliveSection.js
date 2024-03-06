import React from 'react'
import "../Styles/style.css"
import midImage from '../Assets/Images/pi1.gif'
const WeBeliveSection = () => {
    return (
        <div>
            <div>
                {/* Body Section */}
                <section className="bg-color more-info-section">
                    <div className="container">
                        <div className="row ">

                            <div className="col-12 col-md-12  text-lg-start col-lg-4 d-flex flex-column justify-content-center align-items-start">
                                <h1 className="text-capitalize fw-bolder text-white  common-heading">We Belive In</h1>
                                <p className="mt-3 mb-5 para-width text-light-grey">Value for money and transparent deals and customer satisfaction. the power of generative AI and our expert talent network</p>
                                <div className="w-100 text-md-start mb-3">
                                    <button type="button" className="btn btn-primary px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Visit Now
                                    </button>
                                    {/* <button ><a href='/resume.pdf'>Download Resume</a></button> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-8 img-section">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                                        <div class="d-flex media-services-info">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="media-body">
                                                <h5 className='mt-0'>Integrity</h5>
                                                <p>Pepper CMP helps marketing teams ideate, create and distribute </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                                        <div class="d-flex media-services-info">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="media-body">
                                                <h5 className='mt-0'>Integrity</h5>
                                                <p>Pepper CMP helps marketing teams ideate, create and distribute </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                                        <div class="d-flex media-services-info">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="media-body">
                                                <h5 className='mt-0'>Integrity</h5>
                                                <p>Pepper CMP helps marketing teams ideate, create and distribute </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                {/* Body Section */}
            </div>
        </div>
    );
}

export default WeBeliveSection;
