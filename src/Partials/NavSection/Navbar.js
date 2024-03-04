import React from 'react'
import "../../Styles/style.css"
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../Assets/Images/Final_Plewrm.webp'
const Navbar = () => {
    return (
        <>
            <div>
                {/*Navbar Section */}
                <nav className="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
                    <div className="container">
                        {/* <div className="container-fluid"> */}
                        {/* here flude are use all area and only container make maintained sapce around */}
                        <a className="navbar-brand text-white" href="#">PLEWRM</a>
                        {/* <img src={LogoImage} alt='linking' className='img-flude' width="160px" autoPlay /> */}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                                {/* Home/Link are movie to start position */}
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-capitalize" href="#online-section">services</a>
                                    {/* <NavLink
                                        // className="nav-link"
                                        className="nav-link text-capitalize"
                                        to="/service">
                                        Services
                                    </NavLink> */}
                                </li><li className="nav-item">
                                    <a className="nav-link text-capitalize" href="#about-services">about </a>
                                </li><li className="nav-item">
                                    <a className="nav-link text-capitalize" href="#contact-us">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*Navbar Section */}
            </div>
        </>

    )
}

export default Navbar
