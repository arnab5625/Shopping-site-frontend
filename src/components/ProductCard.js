import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = ({productImg, title, price, description,_id}) => {
  return (
    <div className='product-card'>
      <section>
      <img src={productImg} alt='product-img'/>
      </section>
      <p>{_id}</p>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <section>
        <button>Add To Cart</button>
        <button>Buy Now</button>

      </section>
    </div>
  )
}

export default ProductCard