import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/BackDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";
import Landing from "./components/Landing";
import TeeCha from "./components/TeeCha";
import HowTeeChaWorks from "./components/HowTeeChaWorks";
import Reviews from "./components/Reviews";
import FeaturedTutors from "./components/FeaturedTutors";
import texts from "./constants/Texts";

function App() {
  return (
      <Router>
        <NavBar/>
        <main>
          <Landing/>
          <TeeCha/>
          <HowTeeChaWorks/>
          <Reviews/>
          <FeaturedTutors/>
        </main>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp}/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </Router>
  );
}

export default App;
