import ReactGoogleAutocomplete from "react-google-autocomplete";
import { GOOGLE_API_KEY } from "./api";

export default function Searchbar({ setCity }) {

  return (
    <>
    <div className="search-bar-div">
      
      <ReactGoogleAutocomplete
        apiKey={GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          setCity(place.address_components[0].long_name);
        }}
        className='search-bar'
        />
        </div>
    </>
  );
} 
