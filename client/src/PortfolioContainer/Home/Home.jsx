import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
        <Header/>
      <Profile />
      <Footer />
    </div>
  );
}
