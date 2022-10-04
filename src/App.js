import { TodoList } from "./components/TodoList";

function App() {
  return (
    <TodoList render={
      (state, fn) => state.items.map((item, index) => <li key={index}>{item} <button value={index} onClick={fn}>Delete</button></li>)
    } />
  );
}

export default App;
