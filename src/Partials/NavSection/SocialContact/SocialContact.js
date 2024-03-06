import React from "react";
import "../../../Styles/style.css";
import "../SocialContact/SocialContact.css";
import { Link, NavLink } from "react-router-dom";

const SocialContact = () => {
  return (
    <>
      <div>
        <nav className="socialcnt socialcnt-expand-lg bg-color py-2 pt-lg-2">
          <div className="container">
            {/* <a className="text-white" href="#"> */}
            <i className="fa-solid fa-phone">
              <span style={{ marginLeft: "10px" }}>+91 99238 94100</span>
            </i>
            &nbsp;&nbsp;&nbsp;
            {/* </a> */}
            {/* <a className="text-white" href="#"> */}
            <i class="fa-solid fa-envelope">
              <span style={{ marginLeft: "10px" }}>
                sales@swastikpropertiess.com
              </span>
            </i>
            {/* </a> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SocialContact;
