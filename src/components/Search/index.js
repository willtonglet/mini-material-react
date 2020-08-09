import React, { useState, useEffect } from "react";
import axios from "axios";

import { SearchStyles, InputStyles, ListStyles } from "./styles";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (term.length > 0) {
        setDebouncedTerm(term);
      }
    }, 1000);

    return () => clearTimeout(timerSearch);
  }, [term]);

  useEffect(() => {
    const renderSearch = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      if (debouncedTerm.length > 0) {
        setResults(data.query.search);
      }
    };

    renderSearch();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="li" key={result.pageid}>
        <div className="li__text">
          <h4>{result.title}</h4>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
        <a
          className="link"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
      </div>
    );
  });

  return (
    <SearchStyles>
      <InputStyles
        placeholder="Enter the search term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
      />
      <ListStyles>{renderedResults}</ListStyles>
    </SearchStyles>
  );
};

export default Search;
