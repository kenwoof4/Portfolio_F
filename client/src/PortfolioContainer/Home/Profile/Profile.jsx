import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/ken-loong-oi-1766b121a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwdtiA4CTTx2JgLR5%2BVtWGA%3D%3D">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#Insta">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/oi.kenloong/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#Contact Me">  
              <i className="fa fa-phone"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Ken Loong Oi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer ⌨️",
                    1500,
                    "React/React Native Dev 🌐",
                    1500,
                    "Electrical Engineer 🔌",
                    1500,
                  ]}
                />
              </h2>
              <span className="profile-role-tagline">
                Just passionate about both software and hardware.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me</button>
            <a href="Resume_Main.pdf" download="KenLoongOi_Resume.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
