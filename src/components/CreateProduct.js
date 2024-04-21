import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/ProductCreation.css"

const CreateProduct = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler= async({title, description,price,imgUrl})=>{
    const res = await axios.post("http://localhost:4000/products", {
      title,
      description,
      price,
      imgUrl
    })
    if(res.status === 200){
      alert("Product created successfully");
    }
      else{
        alert ("Error creating product")
      }
  }


  return (
    <div>
      <h2 style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"125px"}}>List Your Product</h2>
      <form className="product-mod-form-font" onSubmit={handleSubmit(submitHandler)} style={{marginTop:"55px"}}>
        <div className="input-field">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
            {...register("imgUrl")}
          />
          {errors.imgUrl && <div>{errors.imgUrl.message}</div>}
        </div>
        <div>
          <button className="product-mod-btn" type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
