import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import './title.css'

export default function Title() {
  return (
    <>
      <header>
        <FontAwesomeIcon icon={faTemperatureArrowDown} className="temp-gauge" />
        <h1 className="title">Weather Dashboard</h1>
        <FontAwesomeIcon icon={faTemperatureArrowUp} className="temp-gauge" />
      </header>
    </>
  );
}
