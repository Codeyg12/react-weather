import { useState } from "react";
import Searchbar from "./Searchbar";

function App() {

  const [city, setCity] = useState('')

  return (
    <>
      <h1 className="title">Weather Dashboard</h1>
      <Searchbar setCity={setCity} />
    </>
  );
}

export default App;
