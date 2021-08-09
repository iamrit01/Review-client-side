import React from "react";
import PlaceAutoComplete from "react-places-autocomplete";
import "../css/Timeline.css";
import "../css/Searchbar.css";
const SearchBar = (props) => {
  const { address, setAddress, handleSelete } = props;
  return (
    <div>
      <PlaceAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelete}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="address_searchbar">
            <div id="location_para_id">
              <p>Location</p>
            </div>
            <div>
              <div>
                <input {...getInputProps({ placeholder: "Address..." })} />
              </div>
              <div className="address_searchbar_map">
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#688bb5" : "#fff",
                  };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={suggestion.placeId}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PlaceAutoComplete>
    </div>
  );
};

export default SearchBar;
