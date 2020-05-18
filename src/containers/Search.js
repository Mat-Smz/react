// REACT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// AXIOS
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div>
        <p>Search your Country :</p>
        <p> -> Use axios and hook to fetch data of RestCountries.eu Api</p>
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
                <p>
                  <img src={`${result.flag}`} alt={result.name} width="120px" />
                  <h2>{result.name}</h2>

                  {/* <h3>Capital : {result.capital}</h3> */}
                  {/* <p>{result.description}</p> */}
                </p>
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
