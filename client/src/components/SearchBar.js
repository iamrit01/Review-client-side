import React from "react";
import PlaceAutoComplete from "react-places-autocomplete";

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
          <div>
            <input {...getInputProps({ placeholder: "Type Address" })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#bbded6" : "#fff",
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
        )}
      </PlaceAutoComplete>
    </div>
  );
};

export default SearchBar;
