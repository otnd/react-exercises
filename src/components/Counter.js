import React, { useEffect, useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(props.initialValue)

    useEffect(() => {
        const timerID = setInterval(() => setCount(prevCount => prevCount + 1), 1000)
        return () => clearInterval(timerID)
    }, [])

    return <h1>Count: {count}</h1>
}

export default Counter