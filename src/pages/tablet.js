import React, { useEffect, useState } from "react";
import axios from "axios";


const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");
  const data = res.data;
  return data;
};

export default function MobileProducts() {
  const [mobileProducts, setMobileProducts] = useState([]);

  const assignMobileProducts = async () => {
    const allProducts = await fetchProducts();
    const filteredMobileProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes("tablet")
    );
    setMobileProducts(filteredMobileProducts);
  };

  useEffect(() => {
    assignMobileProducts();
  }, []);

  return (
    <div>
      <h2>All tablets</h2>

      <section className="mobile-products">
        {mobileProducts.map((product) => (
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
