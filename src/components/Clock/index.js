import React, { useState } from "react";
import "./index.css";
import { FiMousePointer, FiClock } from "react-icons/fi";
import Swal from "sweetalert2";

const Clock = () => {
    const [numberClicks, setNumberClicks] = useState(0);
    const [startClock, setStartClock] = useState(false);
    const [seconds, setSeconds] = useState(0);

    function handleNumberClick(){
        setNumberClicks(numberClicks + 1);
        setStartClock(true)
    }

    if(startClock){
        if(seconds !== 10){
            setTimeout(() => {
                setSeconds(seconds + 1)
            }, 1000)
        }
        
        else{
            Swal.fire({
                icon: "success",
                title: `${numberClicks/seconds} CPS!`,
                text: `Sua pontuação foi de ${numberClicks} clicks em 10 segundos`,
            })

            setTimeout(() => {
                setStartClock(false);
                setNumberClicks(0);
                setSeconds(0);             
            }, 2000);
        }
    }

    return (
        <>
            <div className="clock">
                <div className="clockLayout">
                    <FiClock />
                    <span>
                        {seconds} segundos
                    </span>
                </div>
            </div>


            <div className="click">
                <h1>Seu score: {numberClicks}</h1>
                <button onClick={handleNumberClick}>
                    <FiMousePointer />
                    <span>Clique para começar</span> 
                </button>
            </div>
        </>
    );
}

export default Clock;