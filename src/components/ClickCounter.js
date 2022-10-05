import React, { useState, useCallback } from "react";

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)

    const increment = useCallback(() => setCount(count => count + 1), [])
    const decrement = useCallback(() => setCount(count => count - 1), [])
    const reset = useCallback(() => setCount(initialValue), [initialValue])

    return { currentValue: count, onIncrement: increment, onDecrement: decrement, onReset: reset }

}

export function ClickCounter({ initialValue = 0 }) {
    const { currentValue, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <>
            <h1>Counter: {currentValue}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}

export default ClickCounter