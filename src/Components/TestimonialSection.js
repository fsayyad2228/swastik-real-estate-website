import React from 'react'
import "../Styles/style.css"
import testImageS from '../Assets/Images/pi5.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'
const TestimonialSection = () => {
    return (
        <>
            <div>
                {/* testimonial section   */}
                <section className="services-section mb-5 pt-5 bg-color">
                    <div className="container text-center common-title fw-bold">
                        <h2 className="common-heading text-capitalize text-white">The Client Suggetions</h2>
                        <hr className="w-25 mx-auto text-white" />
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row g-5">
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">UI/UX Design</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Design Front-End</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row g-5">
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row g-5">
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 ">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="card p-3" style={{ width: 300 }}>
                                                    <img src={testImageS} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-3">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <div className="mt-3">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalf} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                {/* testimonial section   */}
            </div>
        </>
    )
}

export default TestimonialSection
