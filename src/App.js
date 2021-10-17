import { CurrentTemperatureWrapper, Wrapper } from "./App.styles";
import CurrentTemperature from "./components/CurrentTemperature";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <Wrapper>
      <CurrentTemperatureWrapper>
        <CurrentTime />
        <CurrentTemperature />
      </CurrentTemperatureWrapper>
    </Wrapper>
  );
}

export default App;
