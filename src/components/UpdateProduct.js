import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateProduct = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const { productId, title, description, price, imgUrl } = data;
  
      const res = await axios.put(`http://localhost:4000/products/${productId}`, {
        title,
        description,
        price,
        imgUrl,
      });
  
      console.log("MongoDB Update Response:", res.data);
  
      if (res.status === 200) {
        alert("Product updated successfully");
        // Reset the form
        reset();
      } else {
        alert("Error updating product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product");
    }
  };

  return (
    <div>
    <h2 style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"150px"}}>Update Your Product</h2>
      <form className="product-mod-form-font" onSubmit={handleSubmit(submitHandler)}>
        <div className="input-field" style={{ marginTop: '50px' }}>
          <label className="form-label">Product Id</label>
          <input
            type="text"
            name="productId"
            id="productId"
            required={true}
            {...register("productId")}
          />
          {errors.productId && <div>{errors.productId.message}</div>}
        </div>
        <div className="input-field">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            {...register("title")}
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>
        <div className="input-field">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            {...register("description")}
          />
          {errors.description && <div>{errors.description.message}</div>}
        </div>
        <div className="input-field">
          <label className="form-label">price</label>
          <input
            type="number"
            name="price"
            id="price"
            {...register("price")}
          />
          {errors.price && <div>{errors.price.message}</div>}
        </div>
        <div className="input-field">
          <label className="form-label">Image Url</label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            {...register("imgUrl")}
          />
          {errors.imgUrl && <div>{errors.imgUrl.message}</div>}
        </div>
        <div>
          <button className="product-mod-btn" type="submit">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
