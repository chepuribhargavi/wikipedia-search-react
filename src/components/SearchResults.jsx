import SearchItem from "./SearchItem";

function SearchResults({ results }) {
  return (
    <div className="container mt-4">
      {results.map((result) => (
        <SearchItem
          key={result.link}
          result={result}
        />
      ))}
    </div>
  );
}

export default SearchResults;