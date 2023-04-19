import React from "react";
import List from "./List";
import logo from "../../../../UgoImages/Icons/UgoOnly.gif"

const ListContainer = () => {
    return (

        <>
            <div className="logoHeader">
                <img className="imgLogo" src={logo} alt="logo" />
                <h2 className="listHeader">Vacationist</h2>
            </div>

            <List title="Itinerary Builder" />
            <List title="ToDo List" />
        </>
    )
}

export default ListContainer
