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

  const submitHandler = async ({ productId }) => {
    try {
      const res = await axios.delete(`http://localhost:4000/products/${productId}`);
      console.log("MongoDB Delete Response:", res.data);

      if (res.status === 200) {
        alert("Product deleted successfully");
        // Reset the form
        reset();
      } else {
        alert("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  return (
    <div>
    <h2 style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"20px"}}>Delete Your Product</h2>
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
        <div>
          <button className="product-mod-btn" type="submit">Delete Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
