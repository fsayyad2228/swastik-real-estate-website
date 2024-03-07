import React from 'react'
import "../Styles/style.css"
import testImageF from '../Assets/Images/rsf.jpg'
import testImageS from '../Assets/Images/rs2.jpg'
import testImageT from '../Assets/Images/rs3.jpg'
import { faArrowAltCircleRight, faBold, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceSection = () => {
    return (
        <>
            <div>
                {/* Service Section */}
                <section className="services-section " id="about-services">
                    <div className="container text-center common-title fw-bold">
                        <h2 className="common-heading mt-5 py-3"> Right Place To Buy Dream Home</h2>
                        <hr className="w-30 mx-auto text-black" />
                    </div>
                    <div className="container mt-5">
                        <div className="row g-5">
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    {/* <img src={socialIageT} alt='linking' className='img-flude' width="200px" autoPlay /> */}
                                    <img src={testImageF} alt='linking' className='img-flude' width="100%" autoPlay />
                                    <h4 className="my-3 fw-normal">Facebook initially launched.</h4>
                                    <p className='mb-5 text-center'>As Boyd also describes, when Facebook initially launched in 2004, it solely targeted college students and access was intentionally limited.</p>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "#111",}} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    <img src={testImageS} alt='linking' className='img-flude' width="100%" autoPlay />
                                    <h4 className="my-3 fw-normal text-capitalize">Gathering Information</h4>
                                    <p className='mb-5 text-center'>As Boyd also describes, when Facebook initially launched in 2004, it solely targeted college students and access was intentionally limited.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "#111",}} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    {/* <img src={socialImageF} alt='linking' className='img-flude' width="200px" /> */}
                                    <img src={testImageT} alt='linking' className='img-flude' width="100%" />
                                    <h4 className="my-3 fw-normal text-capitalize">Connect people</h4>
                                    <p className='mb-5 text-center'>Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "#111",}} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Section */}
            </div>
        </>
    )
}

export default ServiceSection
