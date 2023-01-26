import ReactGoogleAutocomplete from "react-google-autocomplete";
import { GOOGLE_API_KEY } from "./api";

export default function Searchbar() {
  return (
    <>
      <ReactGoogleAutocomplete
        apiKey={GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          console.log(place);
        }}

      />
    </>
  );
}

// import { GOOGLE_API_KEY } from "./api";
// // import ReactGoogleAutocomplete from "react-google-autocomplete";
// // import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
// // import useOnclickOutside from "react-cool-onclickoutside";

// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng
// } from "react-places-autocomplete";
// import { useState } from "react";

// export default function Searchbar() {
    
//     const [address, setAddress] = useState('')

//     function handleChange(address) {
//         setAddress(address)
//     }
//     function handleSelect(address) {
//         geocodeByAddress(address)
//         .then(nextPlace.innerT)
//         .then(res => getLatLng(res[0]))
//         .then(latLng => console.log('Success', latLng))
//         .catch(err => console.error('Error', err))
//     }
//     return (
//         <>
//     <PlacesAutocomplete 
//     value={address}
//     onChange={handleChange}
//     onSelect={handleSelect}
//     >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                <div>
//                <input id="nextPlace"
//                  {...getInputProps({
//                    placeholder: 'Search Places ...',
//                    className: 'location-search-input',
//                  })}
//                />
//                <div className="autocomplete-dropdown-container">
//                  {loading && <div>Loading...</div>}
//                  {suggestions.map(suggestion => {
//                    const className = suggestion.active
//                      ? 'suggestion-item--active'
//                      : 'suggestion-item';
//                    // inline style for demonstration purpose
//                    const style = suggestion.active
//                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                    return (
//                      <div
//                        {...getSuggestionItemProps(suggestion, {
//                          className,
//                          style,
//                        })}
//                      >
//                        <span>{suggestion.description}</span>
//                      </div>
//                    );
//                  })}
//                </div>
//              </div>
//         )}
//     </PlacesAutocomplete> 
//         </>
//     )
// }
// // // export default function Searchbar() {
// //     export default function Searchbar() {
// //         const {
// //           ready,
// //           value,
// //           suggestions: { status, data },
// //           setValue,
// //           clearSuggestions,
// //         } = usePlacesAutocomplete({
// //           requestOptions: {
// //             /* Define search scope here */
// //           },
// //           debounce: 300,
// //         });
// //         const ref = useOnclickOutside(() => {
// //           // When user clicks outside of the component, we can dismiss
// //           // the searched suggestions by calling this method
// //           clearSuggestions();
// //         });
      
// //         const handleInput = (e) => {
// //           // Update the keyword of the input element
// //           setValue(e.target.value);
// //         };
      
// //         const handleSelect =
// //           ({ description }) =>
// //           () => {
// //             // When user selects a place, we can replace the keyword without request data from API
// //             // by setting the second parameter to "false"
// //             setValue(description, false);
// //             clearSuggestions();
      
// //             // Get latitude and longitude via utility functions
// //             getGeocode({ address: description }).then((results) => {
// //               const { lat, lng } = getLatLng(results[0]);
// //               console.log("📍 Coordinates: ", { lat, lng });
// //             });
// //           };
      
// //         const renderSuggestions = () =>
// //           data.map((suggestion) => {
// //             const {
// //               place_id,
// //               structured_formatting: { main_text, secondary_text },
// //             } = suggestion;
      
// //             return (
// //               <li key={place_id} onClick={handleSelect(suggestion)}>
// //                 <strong>{main_text}</strong> <small>{secondary_text}</small>
// //               </li>
// //             );
// //           });
      
// //         return (
// //           <div ref={ref}>
// //             <input
// //               value={value}
// //               onChange={handleInput}
// //             //   disabled={!ready}
// //               placeholder="Where are you going?"
// //             />
// //             {/* We can use the "status" to decide whether we should display the dropdown or not */}
// //             {status === "OK" && <ul>{renderSuggestions()}</ul>}
// //           </div>
// //         );
// //       };
// // // }
