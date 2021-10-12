import { CurrentTemperatureWrapper, Wrapper } from "./App.styles";
import CurrentTemperature from "./components/CurrentTemperature";

function App() {
  return (
    <Wrapper>
      <CurrentTemperatureWrapper>
        <CurrentTemperature />
      </CurrentTemperatureWrapper>
    </Wrapper>
  );
}

export default App;
