import { useState } from "react"

export const useCounter = (intialValue = 10) => {

    const [counter, setCounter] = useState( intialValue);

    const increment = (value = 1) => {
        setCounter (counter + value);
    };

    const decrement = (value = 1) => {
        if(counter == 0) return;

        setCounter (counter - value);
    };

    const reset = () => {
        setCounter (intialValue);
    };

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}