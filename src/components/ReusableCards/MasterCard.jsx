import React from "react";

const MasterCard = ({ title, description, rooms}) => {

    return (
        <div id="cardFlex">
            <h1 className="cardStyle" id="cardTitle">{title}</h1>         
            <h3 className="cardStyle">{rooms}</h3>       
            <p className="cardStyle">{description}</p>            
        </div>
    )
};

export default MasterCard
