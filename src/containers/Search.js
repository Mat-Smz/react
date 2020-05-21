// react
import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

// axios
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="main">
        <h3>Search your country </h3>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await axios.get(
              `https://restcountries.eu/rest/v2/name/${search}`
            );
            setResults(response.data);
            console.log(response.data);
            setIsLoading(false);
          }}
        >
          <input
            type="text"
            placeholder="Search country"
            value={search}
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
            }}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="result">
        {!isLoading &&
          results.map((result, index) => {
            return (
              // <Link to={`/country/${result.name}`} key={index}>
              <Card
                title={result.name}
                img={result.flag}
                capital={result.capital}
              ></Card>
              // </Link>
            );
          })}
      </div>
      <br />
      <Link to="/">Home</Link>
    </>
  );
};

export default Search;
