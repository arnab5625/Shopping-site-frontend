import React, { useEffect, useState, } from "react"; //hook import(useEffect): runs when page reloads
import ProductCard from "../components/ProductCard"
import axios from "axios";
import "../styles/Shop.css"

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");

  const data = res.data;

  console.log(data);

  return data;

}

//main function:
export default function Shop() {

  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchProductData = await fetchProducts();
    setProductData(fetchProductData);
  }

  // const getData = async () => {
  //   await fetchProducts();
  // }

  useEffect(() => {
    assignData();
  }, [])

  return (
    <div>
      <p>All Products</p>
      <section className="all-products">
        {
          productData.map((product) => (
            <ProductCard
              productImg={product.imgUrl}
              title={product.title}
            />
          ))
        }

      </section>
    </div>)
}
//function name may be any doesn't matter if exports default//