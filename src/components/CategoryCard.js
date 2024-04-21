import React from 'react'
import "../styles/CategoryCard.css";
const CategoryCard = ({categoryText}) => {
  return (
    <div className="category-card">
    <p>{categoryText}</p>
    </div>
  )
}

export default CategoryCard;