import React from "react";

function Search({input, setInput}) {
 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
