import React from 'react';
import backDropHandler from "./events/BackDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import HowToGet from "./components/HowToGet";
import Reviews from "./components/Reviews";
import texts from "./constants/texts";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
      <CookiesProvider>
        <NavBar/>
        <main>
          <Landing/>
          <Welcome/>
          <Services/>
          <HowToGet/>
          <Reviews/>
        </main>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp} status="active"/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </CookiesProvider>
  );
}

export default App;
