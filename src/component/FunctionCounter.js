import React, { useState } from "react";
import '../App.css'


const FunctionCounter = () => {

    const [number, setNumber] = useState(0);

    function handleIncrease() {
        setNumber(number + 5);
    }

    function handleDecrease() {
        setNumber(0);
    }

    
    //display
    return (
        <div className='body'>
            <h1 className="display">{number}</h1>
            <div>
                <button onClick={() => handleDecrease()} className='button'>Rest</button>
                <button onClick={() => handleIncrease()} className='button'>Add 5</button>
            </div>
        </div>
    )
}

export default FunctionCounter;