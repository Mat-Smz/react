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
      <div>
        <p>Search your country :</p>
        <i>
          (axios and hook to fetch data of RestCountries.eu Api + async/await )
        </i>
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

      <div>
        {!isLoading &&
          results.map((result, index) => {
            return (
              <Link to={`/country/${result.name}`} key={index}>
                <Card
                  title={result.name}
                  img={result.flag}
                  capital={result.capital}
                ></Card>
              </Link>
            );
          })}
        <br />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Search;
