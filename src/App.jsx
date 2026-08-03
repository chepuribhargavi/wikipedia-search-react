import wikiLogo from "./assets/wikipedia.png";
import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchWikipedia = async () => {
    if (searchInput.trim() === "") {
      return;
    }

    setLoading(true);

    const url =
      "https://apis.ccbp.in/wiki-search?search=" + searchInput;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setResults(data.search_results);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">

      <div className="text-center mb-4">
  <img
    src={wikiLogo}
    alt="Wikipedia Logo"
    width="150"
    className="mb-3"
  />

  <h1>Wikipedia Search Application</h1>
</div>

      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchWikipedia={searchWikipedia}
      />

      {loading && <Loader />}

      {!loading && results.length === 0 && searchInput !== "" ? (
  <h5 className="text-center text-muted mt-4">
    No results found
  </h5>
) : (
  <SearchResults results={results} />
)}

    </div>
  );
}

export default App;