import React from "react";
import aboutImage from "../../src/Assets/Images/about-us.png";
import invsImg from "../../src/Assets/Images/Swastikprop.png";
import "../../src/Styles/style.css";
const AboutUs = () => {
  return (
    <>
      <div className="about-us content-area-7 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-carousel">
                <div
                  id="carouselExampleIndicators3"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={aboutImage}
                        alt="property"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-info">
                <h3>About Our Company</h3>
                <p>
                  Swastik Properties is a leading platform for customers to
                  builder’s access in Pune. Swastik focuses on expert services
                  clustered around Home, where the user need is customized.
                  Using technology and domain intelligence, the platform seeks
                  to understand the user need in detail and matches it to
                  verified service professionals.
                </p>

                <h3>
                  Investor
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={invsImg} className="img-fluid" width="100" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="agent content-area-2">
        <div className="container">
          <div className="main-title">
            <h1>Committee Board</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="agent-2">
                {/* <div className="agent-photo">
                  <img src=" " alt="agent-grid-2" className="img-fluid" />
                  <ul className="social-list clearfix">
                    <li>
                      <a href="#" className="facebook-bg">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter-bg">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google-bg">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="agent-details">
                  <h5>
                    <a href="#">Navnath</a>
                  </h5>
                  <p>Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="agent-2">
                {/* <!-- <div className="agent-photo">
                        <img src="assets/img/avatar/user.jpg" alt="agent-grid-2" className="img-fluid">
                        <ul className="social-list clearfix">
                            <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="google-bg"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>--> */}
                <div className="agent-details">
                  <h5>
                    <a href="#">Bhushan</a>
                  </h5>
                  <p>Vice President</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="agent-2">
                {/* <!-- <div className="agent-photo">
                        <img src="assets/img/avatar/user.jpg" alt="agent-grid-2" className="img-fluid">
                        <ul className="social-list clearfix">
                            <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="google-bg"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>--> */}
                <div className="agent-details">
                  <h5>
                    <a href="#">kalpesh </a>
                  </h5>
                  <p>Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
