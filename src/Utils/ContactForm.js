import React from "react";
import "../Styles/style.css";
import CursorPointer from "./CursorPointer";

const ContactForm = () => {
  return (
    <>
      <div>
        {/* contact section  */}
        <section
          className="contact-section bg-color text-white  pt-5 "
          id="contact-us"
        >
          <CursorPointer />

          <div className="container text-center common-title fw-bold">
            <h2 className="common-heading text-capitalize  text-white">
              Contact Us
            </h2>
            <hr className="w-25 mx-auto" />
          </div>

          <div className="container ">
            <div className="form-section mx-auto">
              <form action="https://formspree.io/f/xdorkoek" method="POST">
                <div className="mb-3">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <label
                        htmlFor="exampleInputFirstName"
                        className="form-label"
                      >
                        First Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Fname"
                        autoComplete="off"
                        required
                        className="contact-form-control"
                        id="exampleInputFirstName"
                        aria-describedby="firstnamehelp"
                      />
                      {/* <div id="firstnamehelp" className="form-text text-grey">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="col-lg-6 col-12">
                      <label
                        htmlFor="exampleInputLastName"
                        className="form-label"
                      >
                        Last Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Lname"
                        autoComplete="off"
                        required
                        className="contact-form-control"
                        id="exampleInputLastName"
                        aria-describedby="lastnamehelp"
                      />
                      {/* <div id="lastnamehelp" className="form-text text-grey">We'll never share your email with anyone else.</div> */}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    autoComplete="off"
                    required
                    className="contact-form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-form-control"
                    name="message"
                    autoComplete="off"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary contactBtn ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* contact section  */}
      </div>
    </>
  );
};

export default ContactForm;
