import React from "react";
import MainCarousel from '../TopMostRow/MainCarousel/MainCarousel'
import headerLogo from '../../../UgoImages/Logo/headerLogo.gif'

const TopMostRow = () => {   

    return (
        <div className="TopMostRow">            
            <img id="logo" src={headerLogo} alt="Ugo Logo" />
            <MainCarousel />
        </div>
    )
};

export default TopMostRow

