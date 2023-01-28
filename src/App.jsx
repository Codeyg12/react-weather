import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Searchbar from "./Searchbar/Searchbar";
import Title from "./Title";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <Title />
      <Searchbar setCity={setCity} />
      <CurrentWeather />
    </>
  );
}

export default App;
