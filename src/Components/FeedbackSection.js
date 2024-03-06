import React, { useState } from "react";
import fbackpng from "../Assets/Images/feedback.png";
import "../Styles/style.css";
const FeedbackForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (you can handle this part separately)
    console.log(formData);
  };

  return (
    <div>
      <section id="Career-Section">
        <form
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <div className="container">
            <div class="career-section">
              <div className="col-lg-6 col-md-12">
                <div className="form-section mx-auto">
                  <h3>We Value Your Feedback...</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group name">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Name *"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group email">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email *"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <grammarly-extension
                        data-grammarly-shadow-root="true"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                        }}
                        className="dnXmp"
                      ></grammarly-extension>
                      <grammarly-extension
                        data-grammarly-shadow-root="true"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                        }}
                        className="dnXmp"
                      ></grammarly-extension>
                      <div className="form-group message">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Write message"
                          spellcheck="false"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      {" "}
                      <div
                        class="g-recaptcha"
                        data-sitekey="6LdLA7gZAAAAAO0a8vS7Z8LdATsF04YlS7Zx_RLs"
                      >
                        <div style={{ width: "304px", height: "78px" }}>
                          <div>
                            <iframe
                              title="reCAPTCHA"
                              width="304"
                              height="78"
                              role="presentation"
                              name="a-xkuzhdvl4yk8"
                              frameborder="0"
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdLA7gZAAAAAO0a8vS7Z8LdATsF04YlS7Zx_RLs&amp;co=aHR0cHM6Ly9yZWFob2xpY21lZGlhdG9ycy5jb206NDQz&amp;hl=en-GB&amp;v=vj7hFxe2iNgbe-u95xTozOXW&amp;size=normal&amp;cb=vnjvn2x82hme"
                            ></iframe>
                          </div>
                          <textarea
                            id="g-recaptcha-response"
                            name="g-recaptcha-response"
                            class="g-recaptcha-response"
                            style={{
                              width: "250px",
                              height: "40px",
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: "0px",
                              resize: "none",
                              display: "none",
                            }}
                          ></textarea>
                        </div>
                        <iframe style={{ display: "none" }}></iframe>
                      </div>{" "}
                    </div>

                   
                    <div className="col-md-12">
                      <div className="send-btn">
                        <br />
                        <button
                          type="submit"
                          className="btn btn-primary btn-md"
                          name="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="contact-info">
                  <img src={fbackpng} class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FeedbackForm;
