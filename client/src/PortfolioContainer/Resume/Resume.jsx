import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { useEffect } from "react";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },
    {
      label: "Work History",
      logoSrc: "work-history.svg",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    {
      label: "Projects",
      logoSrc: "projects.svg",
    },
    {
      label: "Interests",
      logoSrc: "interests.svg",
    },
  ];
  const programmingSkillDetails = [
    {
      skill: "Javascript",
      ratingPercentage: 99,
    },
    {
      skill: "HTML",
      ratingPercentage: 85,
    },
    {
      skill: "CSS",
      ratingPercentage: 95,
    },
    {
      skill: "ReactJS",
      ratingPercentage: 85,
    },
    {
      skill: "React Native",
      ratingPercentage: 85,
    },
    {
      skill: "Python",
      ratingPercentage: 85,
    },
    {
      skill: "Java",
      ratingPercentage: 95,
    },
    {
      skill: "C#",
      ratingPercentage: 90,
    },
    {
      skill: "C++",
      ratingPercentage: 80,
    },
    {
      skill: "C",
      ratingPercentage: 80,
    },
  ];
  const projectDetails = [
    {
      title: "Ecommerce Chatbot",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A chatbot for ecommerce website to navigate,select and buy goods.",
      subHeading: "Code: ReactJs, DialogFlow, RestApi",
    },
    {
      title: "RFID Cloner",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Cloner which reads and write signals to Rfid at 13.56MHz.",
      subHeading: "Tech: C++, Arduino Uno, RC522Module. ",
    },
    {
      title: "LED Display Cube",
      duration: { fromDate: "2019", toDate: "2020" },
      description: "LED cube that displays the vitals of a computer.",
      subHeading: "Tech: C++, Python, Raspberry Pi 3. ",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University Of Wisconsin-Madison"}
        subHeading={"B.S Electrical Engineering"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"University Of Wisconsin-Madison"}
        subHeading={"B.S Computer Sciences"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Sunway University"}
        subHeading={"Foundation in Electrical Engineering"}
        fromDate={"2018"}
        toDate={"2019"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"University of Wisconsin-Madison Conference Centers"}
        subHeading={"Audio/Visual Technician"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          ◼Communicate with event organizers to set up equipment and provide
          on-the-spot troubleshooting.
        </span>
        <br />
        <span className="resume-description-text">
          ◼Install camera systems using Blackmagic Web Presenters integration
          to stream and record third-person camera footage.
        </span>
        <br />
        <span className="resume-description-text">
          ◼Analyze and debug old Crestron hardware using C# code to fix
          functionality of conference room control interface.
        </span>
        <br />
        <br />
        <ResumeHeading
          heading={"P&P PROCESS & PNEUMATICS SDN. BHD"}
          subHeading={"Logistics Coordinator"}
          fromDate={"2021"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            ◼Coordinate shipments of Pneumatic and Vision systems to local
            factories.
          </span>
          <br />
          <span className="resume-description-text">
            ◼Liaise between warehouse personnel and customer to facilitate
            account and operational needs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Tennis"
        description="I grew up playing tennis and I love it to death. When I'm on the court nothing else matters. Playing helps me clear my mind and find focus. 🎾"
      />
      <ResumeHeading
        heading="Music"
        description="I play the electric guitar. Started two years ago and hope to play the forbidden rift at an guitar store one day.🎸"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="opps... No internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className="resume-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details:"} />
      </div>
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>
        <div className="resume-bullet-details">{getResumeScreen()}</div>
      </div>
    </div>
  );
}
