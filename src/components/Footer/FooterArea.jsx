import React from "react";
import Form from "../HomePageSections/LeftSide/Form/Form";
import UgoOnly from '../../UgoImages/Icons/UgoOnly.gif'
import phoneMint from "../../UgoImages/Icons/phoneMint.gif"
import instagramMint from "../../UgoImages/Icons/instagramMint.gif"
import facebookMint from "../../UgoImages/Icons/facebookMint.gif"
import githubMint from "../../UgoImages/Icons/githubMint.gif"
import twitterMint from "../../UgoImages/Icons/twitterMint.gif"

const FooterArea = () => {

    return (

        <div id="bottomArea">
            <div id="bottomFlex">
                <div id="addressArea">
                <Form />
                </div>

                <div id="footerMiddle">
                    <p id="tagLine">"We Are Where <img id="footerLogo" src={UgoOnly} />"</p>

                    <div id="iconArea">
                        <a href="#iconArea"> <img className="icons" src={phoneMint} alt="phone" /></a>
                        <a href="#iconArea"> <img className="icons" src={instagramMint} alt="instagram" /></a>
                        <a href="#iconArea"> <img className="icons" src={facebookMint} alt="facebook" /></a>
                        <a href="#iconArea"> <img className="icons" src={twitterMint} alt="twitter" /></a>
                        <a href="#iconArea"> <img className="icons" src={githubMint} alt="github" /></a>
                    </div>
                </div>
                <div id="copyrightArea">
                    <p id="copyright">&#169; 2023 Ugo Destinations </p>
                </div>
            </div>
        </div>
    )
}

export default FooterArea
