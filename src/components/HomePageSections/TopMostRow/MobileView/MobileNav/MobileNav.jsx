import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../NavBar/Search";
import { SedonaMapping, WilliamsMapping, JapanMapping, williamsPics, sedonaPics, japanPics } from '../../../../../data'
import AerialWilliams from '../../../../../UgoImages/Williams/AerialWilliams.png'
import AerialOsaka from '../../../../../UgoImages/Japan/AerialOsaka.png'
import AerialSedona from '../../../../../UgoImages/Sedona/AerialSedona.png'


const MobileNav = ({ setLocation, setLocationAreaPics, setBigImage, setTextArea }) => {

    const [showModal, setShowModal] = useState(false);
    const handleClick = (e) => {
        setShowModal(true);
    }

    const handleWilliams = (e) => {

        setLocation(WilliamsMapping)
        setLocationAreaPics(williamsPics)
        setBigImage(AerialWilliams)
        setTextArea("Williams, Arizona")
        setShowModal(false)
    }

    const handleSedona = (e) => {

        setLocation(SedonaMapping)
        setLocationAreaPics(sedonaPics)
        setBigImage(AerialSedona)
        setTextArea("Sedona, Arizona")
        setShowModal(false)
    }

    const handleJapan = (e) => {

        setLocation(JapanMapping)
        setLocationAreaPics(japanPics)
        setBigImage(AerialOsaka)
        setTextArea("Osaka, Japan")
        setShowModal(false)
    }

    return (
        <div id="MobileNavBar">
            <div className='hamburgerNav'>

                {!showModal && (

                    <div id="TheHamburgerDiv" onClick={handleClick}>
                        <div className="HamburgerBar" ></div>
                        <div className="HamburgerBar"></div>
                        <div className="HamburgerBar"></div>
                    </div>)}

                {showModal && (
                    <div className="Locations">
                        <Link id='sedona' className='LocationLink' onClick={handleSedona}>Sedona</Link>
                        <Link id='williams' className='LocationLink' onClick={handleWilliams}>Williams</Link>
                        <Link id='japan' className='LocationLink' onClick={handleJapan}>Japan</Link>
                    </div>
                )}
            </div>
            <div className="SearchNav">
                <SearchBar
                    setLocation={setLocation}
                    setLocationAreaPics={setLocationAreaPics}
                    setBigImage={setBigImage}
                    setTextArea={setTextArea} />
            </div>
        </div>
    )
}

export default MobileNav
