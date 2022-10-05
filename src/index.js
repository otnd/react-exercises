import { counterReducer } from "./state/CounterState";
import { legacy_createStore as createStore } from "redux";

const store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'COUNTER@INCREMENT', payload: 1 })
store.dispatch({ type: 'COUNTER@DECREMENT', payload: 1 })
store.dispatch({ type: 'COUNTER@RESET' })