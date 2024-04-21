import React, { useEffect, useState } from "react"; //hook import(useEffect): runs when page loads/ reloads
import axios from "axios";
import "../styles/Shop.css";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");

  const data = res.data;

  console.log(data);

  return data;
};

export default function Shop() {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const assignData = async () => {
    const fetchProductData = await fetchProducts();
    setProductData(fetchProductData);
  };

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div>
      <p>All Products</p>

      {/* search section below */}

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      

      <section className="all-products">
        {productData
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <div className="single-products" key={product._id}>
              <div className="product-card">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  style={{
                    width: "200px",
                    height: "200px", // Set to your desired fixed height
                    objectFit: "cover", // This ensures the image covers the specified dimension
                  }}
                />
                <p>{product._id}</p>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <section className="add-remove-btn">
                  <button className="add-btn">Add To Cart</button>
                  <button className="add-btn">Buy Now</button>
                </section>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
