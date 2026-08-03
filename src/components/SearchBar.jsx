function SearchBar({
  searchInput,
  setSearchInput,
  searchWikipedia,
}) {

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchWikipedia();
    }
  };

  return (
    <div className="input-group mb-4">

      <input
        type="text"
        className="form-control"
        placeholder="Search Wikipedia..."
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button
        className="btn btn-primary"
        onClick={searchWikipedia}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;