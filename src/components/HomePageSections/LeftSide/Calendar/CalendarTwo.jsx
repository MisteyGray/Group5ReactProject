import React, { useState } from "react";
import ReservationButton from './ReservationButton'


const Calendar = ({ location }) => {
    const [currentDay, setCurrentDay] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(currentDay.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDay.getFullYear());

    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const firstDayOfMonth = new Date(currentYear, currentMonth).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();


    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const [showCheckIn, setShowCheckIn] = useState(false)
    const [showCheckOut, setShowCheckOut] = useState(false)
    const [showBookingButton, setShowBookingButton] = useState(false)   

    const handleDateSelect = (e) => {

        let day = e.target.innerHTML;

        if (!checkIn) {
            setCheckIn(new Date(currentYear, currentMonth, day).toLocaleDateString());
            setShowCheckIn(true)

        } else {
            setCheckOut(new Date(currentYear, currentMonth, day).toLocaleDateString());
            setShowCheckOut(true)
            setShowBookingButton(true)
        }
    }

    const ResetInfo = () => {
        setCheckIn('')
        setCheckOut('')
    }

  
    const renderCalendar = () => {
        let calendar = [];
        let count = 1;
        for (let i = 0; i < 6; i++) {
            let week = []
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    week.push(<td key={j}></td>);
                } else if (count > daysInMonth) {
                    break;
                } else {
                    week.push(<td key={j} onClick={(e) => handleDateSelect(e)}

                    >{count}</td>)
                    count++
                }
            }
            calendar.push(<tr key={i}>{week}</tr>)
        }
        return calendar
    }


    const previous = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }
    const next = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    }

    return (
        <div id="componentWrapper">
            <div id='calendarWrapper'>
                <h2 id='monthAndYear'>
                    {monthsOfTheYear[currentMonth]} {currentYear}
                </h2>
                <table>
                    <tbody>
                        <tr>
                            {daysOfTheWeek.map((day, index) => <td id="tabledates" key={index}>{day}</td>)}
                        </tr>

                        {renderCalendar()}
                    </tbody>
                </table>
                
            <div className="nightlyPrice">
                {location[0].title == 'Sedona' ? <h2>$500/night</h2> :
                    location[0].title == 'Williams' ? <h2>$350/night</h2> :
                        location[0].title == 'Osaka, Japan' ? <h2>$850/night</h2> :
                            <h2>Please select a location</h2>}
            </div>
                <p><em>Please select Check-in and Check-out dates on calendar</em></p>          
                <div id="monthClick">
                    <button className="monthButtons" onClick={previous}>&#60;</button>
                    <button className="monthButtons" onClick={next}>&#62;</button>
                </div>
            </div>

            <div className="reservationDates">

                {showCheckIn && (
                    <>
                        <button className="reset" onClick={ResetInfo}>Reset</button>
                        <h4>Check In:  {`${checkIn}`}</h4>

                    </>)}

                {showCheckOut && (
                    <>
                        <h4>Check Out:  {`${checkOut}`}</h4>
                    </>
                )}
                {showBookingButton && (
                    <>
                        <ReservationButton
                            checkIn={checkIn}
                            checkOut={checkOut}
                            setShowCheckIn={setShowCheckIn}
                            setShowCheckOut={setShowCheckOut}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default Calendar
