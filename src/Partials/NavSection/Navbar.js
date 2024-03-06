import React from "react";
import "../../Styles/style.css";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../Assets/Images/Final_Plewrm.webp";
const Navbar = () => {
  return (
    <>
      <div>
        {/*Navbar Section */}

        <header className="main-header  " id="main-header-2">
          {/* <div className=" container"> */}
          {/* <div className="row"> */}
          <div className="col-12">
            <nav className="navbar navbar-expand-lg nav-bg-color py-4 pt-lg-4 ">
              <div className="container">
                {/* <div className="container-fluid"> */}
                {/* here flude are use all area and only container make maintained sapce around */}
                <Link className="navbar-brand text-white" to="/">
                  PLEWRM
                </Link>
                {/* <img src={LogoImage} alt='linking' className='img-flude' width="160px" autoPlay /> */}

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                    {/* Home/Link are movie to start position */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-white text-capitalize"
                        aria-current="page"
                        to="/"
                      >
                        home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-capitalize" to="/aboutus">
                        about us
                      </Link>
                      {/* <NavLink
                                        // className="nav-link"
                                        className="nav-link text-capitalize"
                                        to="/service">
                                        Services
                                    </NavLink> */}
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-capitalize"
                        to="#about-services"
                      >
                        properties{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-capitalize" to="/career">
                        career
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-capitalize" to="/feedback">
                        feedback
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-capitalize" to="/contact">
                        contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          {/* </div> */}
          {/* </div> */}
        </header>
        {/*Navbar Section */}
      </div>
    </>
  );
};

export default Navbar;
