import React from 'react'
import "../Styles/style.css"
import socialImageF from '../Assets/Images/si1.gif'
import socialIageS from '../Assets/Images/si2.gif'
import socialIageT from '../Assets/Images/si3.gif'
import ProfilePic from '../Assets/Images/Profile_pic1.png'

import { faArrowAltCircleRight, faBold, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceSection = () => {
    return (
        <>
            <div>
                {/* Service Section */}
                <section className="services-section " id="about-services">
                    <div className="container text-center common-title fw-bold">
                        <h2 className="common-heading mt-5"> What will we do About</h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                    <div className="container mt-5">
                        <div className="row g-5">
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    {/* <img src={socialIageT} alt='linking' className='img-flude' width="200px" autoPlay /> */}
                                    <img src={ProfilePic} alt='linking' className='img-flude' width="160px" autoPlay />
                                    <h4 className="my-3 fw-normal">Pawan Vasant Salve</h4>
                                    <p className='mb-5 text-start'><strong style={{ color: '#000', fontSize: 22 }}>Software Engineer, Front-end, Responsive Website, Mobile App & Web Application Developer.</strong>Dedicated and skilled React Developer with 2.6 years of experience in UI Development. Proficient in developing web applications
                                        and Web pages using ReactJS, Redux, JavaScript, HTML5, CSS. TypeScript, React Native
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    <img src={socialIageT} alt='linking' className='img-flude' width="200px" autoPlay />
                                    <h4 className="my-3 fw-normal">Gathering Information</h4>
                                    <p className='mb-5 text-start'>As Boyd also describes, when Facebook initially launched in 2004, it solely targeted college students and access was intentionally limited.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-12 d-flex">
                                <div className="text-center card-box shadow rounded-2 p-5">
                                    {/* <img src={socialImageF} alt='linking' className='img-flude' width="200px" /> */}
                                    <img src={socialIageS} alt='linking' className='img-flude' width="200px" />
                                    <h4 className="my-3 fw-normal">Connect people</h4>
                                    <p className='mb-5 text-start'>Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href='#services'>
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
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
