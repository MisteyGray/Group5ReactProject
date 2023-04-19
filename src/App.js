import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/HomePageSections/TopMostRow/NavBar/nav';
import Home from './Pages/Home/Home';
import MainCarousel from './components/HomePageSections/TopMostRow/MainCarousel/MainCarousel';
import MobileNav from '../src/components/HomePageSections/TopMostRow/MobileView/MobileNav/MobileNav'
import SigninForms from './components/HomePageSections/TopMostRow/NavBar/SigninForms';
import { SedonaMapping, sedonaPics } from './data';
import AerialSedona from "../src/UgoImages/Sedona/AerialSedona.png"
import bigLogoFinal from "../src/UgoImages/Logo/bigLogoFinal.gif"

function App() {
  const [location, setLocation] = useState(SedonaMapping)
  const [locationAreaPics, setLocationAreaPics] = useState(sedonaPics)
  const [bigImage, setBigImage] = useState(AerialSedona)
  const [textArea, setTextArea] = useState("We are where Ugo")

  return (
    <>
      <div id="wholePage">
        <Router>

          <div id="top">
            <MainCarousel />
            <img id="logo" src={bigLogoFinal} alt="Ugo Logo" />
            <div id='bigNav'>
              <Navbar

                setLocation={setLocation}
                setLocationAreaPics={setLocationAreaPics}
                setBigImage={setBigImage}
                setTextArea={setTextArea}
                textArea={textArea}
              />
            </div>

            <div id='smallNav'>
              <SigninForms />

              <div id='searchDiv'>
                <MobileNav
                  setLocation={setLocation}
                  setLocationAreaPics={setLocationAreaPics}
                  setBigImage={setBigImage}
                  setTextArea={setTextArea}
                  textArea={textArea}
                />
              </div>
            </div>
          </div><br />

          <Routes>
            <Route path='/' element={<Home
              location={location}
              locationAreaPics={locationAreaPics}
              bigImage={bigImage}
              setBigImage={setBigImage}
              setTextArea={setTextArea}
              textArea={textArea}
            />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
