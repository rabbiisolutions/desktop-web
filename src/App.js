import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/backDrop";
import SideBar from "./components/mobile/sideBar";
import NavBar from "./components/mobile/navBar";
import MobileFooter from "./components/mobile/footer";
import SignUpModal from "./components/signUpModal";
import LandingSection from "./components/landing";
import HowTeeChaWorks from "./components/howTeeChaWorks";
import TeeCha from "./components/TeeCha";
import Reviews from "./components/Reviews";
import FeaturedTutors from "./components/FeaturedTutors";
import SigningUp from "./components/SigningUp";
import DropDown from "./components/sub-items/DropDown";

function App() {
  return (
      <Router>
        <NavBar/>
        <DropDown/>
        <LandingSection/>
        <TeeCha/>
        <HowTeeChaWorks/>
        <SigningUp/>
        <Reviews/>
        <FeaturedTutors/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;
