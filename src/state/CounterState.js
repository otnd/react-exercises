const defaultValue = 0

export const counterReducer = (state = { value: defaultValue }, action) => {
    switch (action.type) {
        case 'COUNTER@INCREMENT':
            return { value: state.value + action.payload }
        case 'COUNTER@DECREMENT':
            return { value: state.value - action.payload }
        case 'COUNTER@RESET':
            return { value: defaultValue }
        default:
            return state
    }
}