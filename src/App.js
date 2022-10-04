import Counter from "./components/Counter";

function App() {
  return (
    <Counter initialValue={1} incrementInterval={1000} incrementAmount={1} />
  );
}

export default App;
