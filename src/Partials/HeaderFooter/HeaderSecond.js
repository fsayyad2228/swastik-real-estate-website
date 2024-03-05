import React from 'react';

const HeaderSecond = () => {
  return (
    <>
    <header className='main-header sticky-header header-shrink' id="main-header-2">
                
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg nav-bg-color py-4 pt-lg-4 sticky-top">
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
                                                <a className="nav-link active text-white text-capitalize" aria-current="page" href="#">home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-capitalize" href="#online-section">about us</a>
                                                {/* <NavLink
                                        // className="nav-link"
                                        className="nav-link text-capitalize"
                                        to="/service">
                                        Services
                                    </NavLink> */}
                                            </li><li className="nav-item">
                                                <a className="nav-link text-capitalize" href="#about-services">properties </a>
                                            </li><li className="nav-item">
                                                <a className="nav-link text-capitalize" href="#contact-us">carrer</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-capitalize" href="#contact-us">feedback</a>
                                            </li><li className="nav-item">
                                                <a className="nav-link text-capitalize" href="#contact-us">contact us</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                

            </header>
    </>
  );
}

export default HeaderSecond;
