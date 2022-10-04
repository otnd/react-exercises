import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";

function App() {
  return (
    <>
      <ClickCounter incrementValue={1} initialValue={0} />
    <ClickTracker/>
    </>
  );
}

export default App;
