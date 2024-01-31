import React from 'react'
import './ProductCard.css'

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="card" onClick={() => console.log('click')}>
      <img src={image} alt={name} />
      <div className="container">
        <div>{name}</div>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
