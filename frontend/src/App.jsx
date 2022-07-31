import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app container">
      {products.map((product) => (
        <article key={product.id} className="product">
          <h2>{product.title}</h2>
          <img src={product.image}/>
          <p>{product.description.slice(0, 100)}</p>
          <div className="stats">
            <span>${product.price}</span>
            <br/>
            <span>{product.rating.rate}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default App;
