import Counter from "./components/Counter";

function App() {
  return (
    <Counter initialValue={50} incrementInterval={2000} incrementAmount={5}/>
  );
}

export default App;
