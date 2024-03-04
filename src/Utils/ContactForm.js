import React from 'react'
import "../Styles/style.css"
import CursorPointer from './CursorPointer'

const ContactForm = () => {
    return (
        <>
            <div>
                {/* contact section  */}
                <section className="services-section contact-section bg-color text-white  pt-5 " id="contact-us">
                    <CursorPointer/>
                    <div className="custom-shape-divider-top-1689071027">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="container text-center common-title fw-bold">
                        <h2 className="common-heading text-capitalize  text-white">Contact Us</h2>
                        <hr className="w-25 mx-auto " />
                    </div>

                    <div className="container ">
                        <div className="form-section mx-auto">
                            <form action="https://formspree.io/f/xdorkoek"
                                method="POST">
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="exampleInputFirstName" className="form-label">First Name <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="Fname" autoComplete='off' required className="form-control" id="exampleInputFirstName" aria-describedby="firstnamehelp" />
                                            {/* <div id="firstnamehelp" className="form-text text-grey">We'll never share your email with anyone else.</div> */}
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="exampleInputLastName" className="form-label">Last Name <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="Lname" autoComplete='off' required className="form-control" id="exampleInputLastName" aria-describedby="lastnamehelp" />
                                            {/* <div id="lastnamehelp" className="form-text text-grey">We'll never share your email with anyone else.</div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address <span style={{color:'red'}}>*</span></label>
                                    <input type="email" name="Email" autoComplete='off' required className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" name="message" autoComplete='off' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-secondary  ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* contact section  */}
            </div>
        </>
    )
}

export default ContactForm
