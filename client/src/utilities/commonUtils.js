import Home from "../PortfolioContainer/Home/Home.jsx";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe.jsx";
import Resume from "../PortfolioContainer/Resume/Resume.jsx"
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe.jsx";
import Footer from "../PortfolioContainer/Footer/Footer.jsx";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {screen_name: "Contact Me",
component: ContactMe},
];
export const GET_SCREENS_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
