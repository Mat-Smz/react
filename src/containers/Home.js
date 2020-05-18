import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const {products, setProducts} = useState([]);

  // useEffect(() => {
  // obtenir la liste des produits
  // })

  return (
    <span>
      <Link to="/counter">Counter Hook</Link>
      <br />
      <Link to="/country/france"> Simple page</Link>
      <br />
      <Link to="/json">Map() Json</Link>
      <br />
      <Link to="/search">API Search</Link>
    </span>
  );
};

export default Home;
