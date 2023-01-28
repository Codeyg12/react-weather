import { useState } from "react";
import Searchbar from "./Searchbar";
import Title from "./Title";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <Title />
      <Searchbar setCity={setCity} />
    </>
  );
}

export default App;
