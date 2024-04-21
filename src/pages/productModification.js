import React from "react";
import CreateProduct from "../components/CreateProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from "../components/UpdateProduct";
const productModification = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: "20px",
        }}
      >
        Product Admin Page
      </h1>
      <div style={{borderBottom:"3px solid orangered"}}></div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CreateProduct />
        <DeleteProduct />
        <UpdateProduct />
      </div>
    </>
  );
};

export default productModification;
