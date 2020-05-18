import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const {products, setProducts} = useState([]);

  // useEffect(() => {
  // obtenir la liste des produits
  // })

  return (
    <span>
      <a href="https://google.fr">Simple link to Google</a>
      <br />
      <Link to="/product/walkman"> Page product by id</Link>
      <br />
      <Link to="/counter">Counter using Hook</Link>
    </span>
  );
};

export default Home;
