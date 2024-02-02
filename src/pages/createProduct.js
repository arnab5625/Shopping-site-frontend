import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            {...register("title", { required: "please enter product title" })}
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>
        <div>
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            {...register("description", { required: "please enter product description" })}
          />
          {errors.description && <div>{errors.description.message}</div>}
        </div>
        <div>
          <label className="form-label">price</label>
          <input
            type="number"
            name="price"
            id="price"
            {...register("price", { required: "please enter product price" })}
          />
          {errors.price && <div>{errors.price.message}</div>}
        </div>
        <div>
          <label className="form-label">Image Url</label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            {...register("imgUrl", { required: "please enter product imgUrl" })}
          />
          {errors.imgUrl && <div>{errors.imgUrl.message}</div>}
        </div>
        <div>
          <button type="submit">Create Product</button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
