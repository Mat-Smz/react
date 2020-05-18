import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const {products, setProducts} = useState([]);

  // useEffect(() => {
  // obtenir la liste des produits
  // })

  return (
    <span>
      <a href="https://google.fr">Simple react-routeur-link to Google</a>
      <br />
      <Link to="/country/france"> Example of page country by name</Link>
      <br />
      <Link to="/counter">Counter using Hook</Link>
      <br />
      <Link to="/json">Map Json</Link>
      <br />
      <Link to="/search">Search country by name</Link>
    </span>
  );
};

export default Home;
