import React from "react";

import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function home() {
  return (
    <div>
      <div>
        <p>Categories</p>
        <section className="categories">
          <CategoryCard categoryText={"T-Shirt"} />
          <CategoryCard categoryText="Mobile" />
          <CategoryCard categoryText={"Computer"} />
        </section>
      </div>
      <div>
        <p>Products</p>
        <section className="products">
          <ProductCard productImg={"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700749574_4685708.jpg?format=webp&w=480&dpr=1.0"}
            title={"Captain America"} />
          <ProductCard productImg={"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg"}
            title={"Samsung s23"} />
          <ProductCard productImg={"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5520/media-gallery/g15-5520-bk-coralkb/notebook-g-15-5520-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=457&qlt=100,1&resMode=sharp2&size=457,402&chrss=full"}
            title={"Dell G15"} />

        </section>
      </div>
    </div>
  )
}