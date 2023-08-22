import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag
    )}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0
    }));
};

export default function HackerNewsSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [tag, setTag] = React.useState("story");
  const [page, setPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(50);
  const [loading, setLoading] = React.useState(false);
  const hasResults = Boolean(results.length);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleFilter = (e) => {
    setTag(e.target.value);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <h1>Hacker News Search</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Search Hacker News..."
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <select id="tag" name="tag" onChange={handleFilter} value={tag}>
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>
        <header>
          <h2>
            <span>Page TODO of TODO. </span>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={null}
            />
          </h2>
          <div>
            <button className="link" onClick={null} disabled={null}>
              Previous
            </button>
            <button className="link" onClick={null} disabled={null}>
              Next
            </button>
          </div>
        </header>
        {hasResults && (
          <ul>
            {results?.map(({ url, objectID, title }, index) => {
              const href =
                url || `https://news.ycombinator.com/item?id=${objectID}`;

              return (
                <li key={null}>
                  <span>{null}.</span>
                  <a href={href} target="_blank" rel="noreferrer">
                    TODO
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}