import React from "react";
import MasterCard from "./MasterCard";

const CardLogic = ({ array }) => {

    return (
        <div id="card">
            {array.map((item, index) => {
                return (
                    <MasterCard
                        key={index}
                        title={item.title}
                        rooms={item.rooms}
                        description={item.description} />
                )
            })}
        </div>
    );
};

export default CardLogic

