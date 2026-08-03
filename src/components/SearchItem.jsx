function SearchItem({ result }) {
  return (
    <div className="mb-4">
      <a
        href={result.link}
        target="_blank"
        rel="noreferrer"
        className="fs-4 text-decoration-none"
      >
        {result.title}
      </a>

      <br />

      <a
        href={result.link}
        target="_blank"
        rel="noreferrer"
        className="text-success text-decoration-none"
      >
        {result.link}
      </a>

      <p className="text-secondary mt-2">
        {result.description}
      </p>
    </div>
  );
}

export default SearchItem;