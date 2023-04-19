import React, { useState } from "react";

const ReservationButton = ({ checkIn, checkOut, setShowCheckIn, setShowCheckOut }) => {

    const [showMessage, setShowMessage] = useState(false)
    const [showBookNow, setShowBookNow] = useState(true)

    const newNumber = Math.floor(Math.random() * (1000000000000 - 10000000) + 10000000);

    const Reservation = () => {
        setShowMessage(true)
        setShowCheckIn(false)
        setShowCheckOut(false)
        setShowBookNow(false)
    }
    return (
        <>
            {showBookNow && (
                <>                    
                    <button className="bookNowButton" onClick={Reservation}>Book Now</button>
                </>
            )}
            {showMessage && (
                <>
                    <h2 className="bookNowMsg">Thank you for your reservation!!</h2>

                    <h1 className="bookNowMsg">Confirmation Number: {`${newNumber}`}</h1>

                    <h4 className="bookNow">{`We look forward to seeing you ${checkIn} through ${checkOut}`}</h4>
                </>
            )}
        </>
    )
}

export default ReservationButton
