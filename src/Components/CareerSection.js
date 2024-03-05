import React, { useState } from "react";
import "../Styles/style.css";
import careerImage from "../Assets/Images/career.png";
const CareerSection = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    position: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
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
        {/* <h2>Find Your Dream Job...</h2> */}
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="resume">Upload Resume:</label>
          <br />
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
          <br />

          <label htmlFor="position">Position:</label>
          <br />
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          <br />

          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
          ></textarea>
          <br />

          <input type="submit" value="Submit Application" />
        </form> */}
        <form
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <div className="container">
            <div class="career-section">
              <div className="col-lg-6 col-md-12">
                <div className="form-section mx-auto">
                  <h3>Find your dream Job...</h3>
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

                    <div className="col-md-6">
                      <div className="form-group number">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Number*"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group number">
                        <input
                          type="text"
                          name="exp"
                          className="form-control"
                          placeholder="Experience*"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group number">
                        <input
                          type="file"
                          name="file_attach"
                          className="form-control"
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

                    <div className="col-md-12">
                      <div className="send-btn">
                        <br />

                        <button
                          type="submit"
                          className="btn btn-color btn-md"
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
                  <img src={careerImage} class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CareerSection;
