import { Container } from "./components/Container";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Container title="Component-composition">
      <Welcome name="Davide"></Welcome>
    </Container>
  );
}

export default App;
