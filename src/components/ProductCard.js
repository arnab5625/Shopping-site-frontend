import React from 'react'
import "../styles/ProductCard.css"
const ProductCard = ({productImg, title}) => {
  return (
    <div className='product-card'>
      <section>
      <img src={productImg}/>
      </section>
      <p>{title}</p>
      <section>
        <button>Add To Cart</button>
        <button>Buy Now</button>

      </section>
    </div>
  )
}

export default ProductCard