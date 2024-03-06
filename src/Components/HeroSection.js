import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import testImageF from '../Assets/Images/rsf.jpg'
import testImageS from '../Assets/Images/rs2.jpg'
import testImageT from '../Assets/Images/rs3.jpg'
import "../Styles/style.css"
import CursorPointer from '../Utils/CursorPointer'
import Dropdown from 'react-bootstrap/Dropdown';
const HeroSection = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div>
                {/* Hero Section */}
                <section className="bg-main bg-color hero-section">
                    <CursorPointer />
                    <div className='col-12  '>
                        <Carousel  activeIndex={index} 
                        onSelect={handleSelect}
                        >
                            <Carousel.Item >
                                <img 
                                // style={{ height: '95vh', width: '100%' }}
                                    src={testImageF} className="carosuel-image" alt="..." />
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <Carousel.Caption className="carousel-caption-text-content ">
                                    <h3 className='text-white carousel-caption-text-title'>First slide label</h3>
                                    <p className='text-white mb-3 print-text'>Nulla vitae carousel-caption-text-title First slide elit libero, carousel-caption-text-title.</p>
                                    <button type="button" className="btn btn-primary  px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Visit Now
                                    </button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                // style={{ height: '95vh', width: '100%' }}
                                    src={testImageS} className="carosuel-image" alt="..." />
                                {/* <ExampleCarouselImage text="Second slide" /> */}
                                <Carousel.Caption className="carousel-caption-text-content ">
                                    <h3 className='text-white'>Second slide label</h3>
                                    <p className='text-white mb-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button type="button" className="btn btn-primary  px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Visit Now
                                    </button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                // style={{ height: '95vh', width: '100%' }}
                                    src={testImageT} className="carosuel-image" alt="..." />
                                {/* <ExampleCarouselImage text="Third slide" /> */}
                                <Carousel.Caption className="carousel-caption-text-content">
                                    <h3 className='text-white'>Third slide label</h3>
                                    <p className='text-white mb-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button type="button" className="btn btn-primary  px-4 py-2"
                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-classname="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        Visit Now
                                    </button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    {/* <div className='search-area sa-show-2' id="search-area-4">
                        <div className="container">
                            <div className="search-area-inner">
                                <div className="search-contents">
                                    <form action='#' method="GET">
                                        <div className="row">
                                            <div className="col-6 col-lg-3 col-md-3">
                                                <div className="form-group">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Dropdown Button
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-3 col-md-3">
                                                <div className="form-group">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Dropdown Button
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-3 col-md-3">
                                                <div className="form-group">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Dropdown Button
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div><div className="col-6 col-lg-3 col-md-3">
                                                <div className="form-group">
                                                    <button className='btn btn-warning'>Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
                {/* Hero Section */}
            </div>
        </>
    )
}

export default HeroSection
