import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from "./Search";
import SigninForms from "../NavBar/SigninForms"
import { SedonaMapping, WilliamsMapping, JapanMapping, sedonaPics, williamsPics, japanPics } from "../../../../data";
import AerialWilliams from '../../../../UgoImages/Williams/AerialWilliams.png';
import AerialOsaka from '../../../../UgoImages/Japan/AerialOsaka.png';
import AerialSedona from '../../../../UgoImages/Sedona/AerialSedona.png';


export const Navbar = ({setLocation, setLocationAreaPics, setBigImage, setTextArea}) => { 
    return (
        <div id='navbar'>
            <div className="links">
                <h3><NavLink id='sedona' className='NavLink' onClick={(e) => {
                    {
                        setLocation(SedonaMapping)
                        setLocationAreaPics(sedonaPics)
                        setBigImage(AerialSedona)
                        setTextArea("Sedona, Arizona")                       
                    }
                }
                } to='./'>Sedona</NavLink></h3>

                <h3><NavLink id='williams' className='NavLink' onClick={(e) => {
                    {
                        setLocation(WilliamsMapping)
                        setLocationAreaPics(williamsPics)
                        setBigImage(AerialWilliams)
                        setTextArea("Williams, Arizona")
                    }
                }
                } to='./'>Williams</NavLink></h3>

                <h3><NavLink id='japan' className='NavLink' onClick={(e) => {
                    setLocation(JapanMapping)
                    setLocationAreaPics(japanPics)
                    setBigImage(AerialOsaka)
                    setTextArea("Osaka, Japan")
                }
                } to='./'>Japan</NavLink></h3>
            </div>

            <div className="searchElements">
                <SearchBar
                    setLocation={setLocation}
                    setLocationAreaPics={setLocationAreaPics}
                    setBigImage={setBigImage}
                    setTextArea={setTextArea}
                />
            </div>

            <div className="sign">           
               <SigninForms />
            </div>
        </div>
    )
}

export default Navbar

