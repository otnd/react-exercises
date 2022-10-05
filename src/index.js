
import { CounterState } from "./state/CounterState";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
    counter: CounterState.reducer
})

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(CounterState.actions.increment(1))
store.dispatch(CounterState.actions.decrement(2))
store.dispatch(CounterState.actions.reset())