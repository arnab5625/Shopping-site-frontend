import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");

  const data = res.data;

  console.log(data);

  return data;
};
const shuffleArray = (array) => {
  // Use Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Shop() {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchProductData = await fetchProducts();
    setProductData(fetchProductData);
  };
  useEffect(() => {
    assignData();
  }, []);

  // Shuffle the product array and get the first 5 items
  const randomProducts = shuffleArray(productData).slice(0, 3);

  return (
    <div>
      <div>
        <section className="categories">
          <Link to={"/laptop-section"}>
            <div
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/hands-putting-card-laptop-mock-up_23-2148304981.jpg?t=st=1710125996~exp=1710129596~hmac=54c001b289d480d0273c3d0f95f95739519739defb4c774e4c0747000e616a82&w=740')`,
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "contain", // Adjust size based on image
                backgroundRepeat: "no-repeat", // Prevent image tiling
                borderRadius: "12px",
                backgroundColor: "black", // Solid black color
                backgroundBlendMode: "multiply", // Multiply blend mode darkens the image
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 style={{ color: "yellow", fontSize: "30px" }}>Laptop</h2>
            </div>
          </Link>
          <Link to={"/mobile-section"}>
            <div
              style={{
                backgroundImage: `url('/img/phone.jpg')`,
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "contain", // Adjust size based on image
                backgroundRepeat: "no-repeat", // Prevent image tiling
                borderRadius: "12px",
                backgroundColor: "black", // Solid black color
                backgroundBlendMode: "multiply", // Multiply blend mode darkens the image
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 style={{ color: "yellow", fontSize: "30px" }}>mobile</h2>
            </div>
          </Link>
          <Link to={"/tablet-section"}>
            <div
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/kitchen-tablet-food_114579-8649.jpg?t=st=1710125936~exp=1710129536~hmac=e57fdb6503cb8cbb6d71ac077031e35e6c05129371c7c2b82bc3f75d71f20fe3&w=740')`,
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "contain", // Adjust size based on image
                backgroundRepeat: "no-repeat", // Prevent image tiling
                borderRadius: "12px",
                backgroundColor: "black", // Solid black color
                backgroundBlendMode: "multiply", // Multiply blend mode darkens the image
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 style={{ color: "yellow", fontSize: "30px" }}>Tablet</h2>
            </div>
          </Link>
        </section>
      </div>
      <div>
        <section style={{ marginTop: "50px" }} className="products">
          {randomProducts.map((product) => (
            <div className="single-products" key={product._id}>
              <div className="product-card">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  style={{
                    width: "500px",
                    height: "500px", // Set to your desired fixed height
                    objectFit: "cover", // This ensures the image covers the specified dimensions
                  }}
                />
                <div className="product-information">
                  <p>{product._id}</p>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
