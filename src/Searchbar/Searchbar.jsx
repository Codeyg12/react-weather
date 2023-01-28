import ReactGoogleAutocomplete from "react-google-autocomplete";
import './searchbar.css'

export default function Searchbar({ setCity }) {

  return (
    <>
    <div className="search-bar-div">
      
      <ReactGoogleAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          setCity(place.address_components[0].long_name);
        }}
        className='search-bar'
        />
        </div>
    </>
  );
} 
