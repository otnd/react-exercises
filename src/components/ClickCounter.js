import React, { useState } from "react";

function ClickCounter({ initialValue = 0, incrementAmount = 1 }) {
    const [count, setCount] = useState(initialValue)

    function handleClick() {
        setCount(counter => counter + incrementAmount)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment by {incrementAmount}</button>
        </div>
    )
}

export default ClickCounter