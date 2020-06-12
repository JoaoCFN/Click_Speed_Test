import React, { useState } from "react";
import "./index.css";
import { FiMousePointer, FiClock } from "react-icons/fi";
import Swal from "sweetalert2";

const Click = () => {
    const [numberClicks, setNumberClicks] = useState(0);
    const [startClock, setStartClock] = useState(false);
    const [enabledButton, setEnabledButton] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const [miliseconds, setMiliseconds] = useState(0);

    function handleNumberClick(){
        setNumberClicks(numberClicks + 1);
        setStartClock(true)
    }

    if(startClock && seconds !== 10){
        setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000)
    }
    
    if(seconds === 10){
        setStartClock(false);
        setSeconds(0);
        setEnabledButton(false);

        Swal.fire({
            icon: "success",
            title: `${numberClicks/seconds} CPS!`,
            text: `Sua pontuação foi ${numberClicks} em 10 segundos`
            
        })

        return;
    }

    // setTimeout(() => {
    //     setMiliseconds(miliseconds + 100)
    //     clearInterval(1000)
    // }, 100)

    // if(miliseconds === 1000) setMiliseconds(0);


    return (
        <>
            <div className="clock">
                <div className="clockLayout">
                    <FiClock />
                    <span>
                        {seconds}:{miliseconds}
                    </span>
                </div>
            </div>


            <div className="click">
                <h1>Seu score: {numberClicks}</h1>
                <button onClick={enabledButton && handleNumberClick}>
                    <FiMousePointer />
                    <span>Clique para começar</span> 
                </button>
            </div>
        </>
    );
}

export default Click;