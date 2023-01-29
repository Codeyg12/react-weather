import ReactGoogleAutocomplete from "react-google-autocomplete";
import "./searchbar.css";

export default function Searchbar({ setCity }) {

  const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`

  
  return (
    <>
      <div className="search-bar-div">
        <ReactGoogleAutocomplete
          apiKey={API_KEY}
          onPlaceSelected={(place) => {
            setCity(place.address_components[0].long_name);
          }}
          className="search-bar"
        />
      </div>
    </>
  );
}
