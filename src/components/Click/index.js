import React, { useState } from "react";
import "./index.css";

const Click = () => {
    const [numberClicks, setNumberClicks] = useState(0);

    function handleNumberClick(){
        setNumberClicks(numberClicks + 1);
    }

    return (
        <div className="click">
            <h1>Seu score: {numberClicks}</h1>
            <button onClick={handleNumberClick}>Clique para começar</button>
        </div>
    );
}

export default Click;