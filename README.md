# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# Redux

## Redux - 01

Create a CounterReducer, along with its action types and action creators, to keep track of a counter that can be incremented, decremented and reset.

## Redux - 02

Create a store that uses CounterReducer as its root reducer, and dispatch an INCREMENT action on the store. Verify that the state updates as expected.

## Redux - 03

Create a TodosReducer that handles a list of todos (objects with an id, a title and a completed property), allowing for adding, removing and editing actions.

## Redux - 04

Modify the store so that it uses a root reducer that combines both the counter and todos reducers. Dispatch actions for both the counter and the todos.

## Redux - 05

Subscribe to the store and verify that each state update trigger the subscription callback.