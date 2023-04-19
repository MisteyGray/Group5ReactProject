import React from 'react'
import PhotoMaster from "../../components/HomePageSections/Middle/photoArea/PhotoMaster"
import CardLogic from '../../components/ReusableCards/CardLogic'
import Calendar from '../../components/HomePageSections/LeftSide/Calendar/CalendarTwo'
import Form from '../../components/HomePageSections/LeftSide/Form/Form'
import FooterArea from '../../components/Footer/FooterArea'
import ListContainer from '../../components/HomePageSections/RightSide/lists/ListContainer'
import "./style.css"

const Home = ({ location, textArea, setTextArea, locationAreaPics, bigImage, setBigImage }) => {

    return (
        <div id="wholeContainer">
            <div id="middleWrapper">
                <div className="leftSection">
                    <Calendar location={location} />

                    <div className='contactForm-section'>
                        <Form />
                    </div>
                </div>

                <div className="middleSection">

                    <PhotoMaster
                        pictureArray={locationAreaPics}
                        bigImage={bigImage}
                        setBigImage={setBigImage}
                        setTextArea={setTextArea}
                        textArea={textArea} />

                    <div className="mobileLeftSection">
                        <div id='calendar'>
                            <Calendar location={location} />
                        </div>
                    </div>
                    <CardLogic array={location} />
                </div>

                <div className="rightSection flex-container">
                    <ListContainer />
                </div>
            </div>
            <FooterArea />
        </div>
    );
};

export default Home
