import { CounterState } from "./state/CounterState";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { TodoSlice } from "./state/TodoState";

//Redux-04
const rootReducer = combineReducers({
    counter: CounterState.reducer,
    todo: TodoSlice.reducer
})

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(CounterState.actions.increment(1))
store.dispatch(CounterState.actions.decrement(2))
store.dispatch(CounterState.actions.reset())

store.dispatch(TodoSlice.actions.addTask({ id: 2, task: 'code', completed: true }))
store.dispatch(TodoSlice.actions.removeTask({ id: 2 }))
store.dispatch(TodoSlice.actions.editTask({ id: 1, task: true }))