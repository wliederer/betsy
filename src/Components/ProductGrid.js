import React from 'react'
import './ProductGrid.css'
import gus from './images/gus2.JPG'
import ProductCard from './ProductCard'

const ProductGrid = ({ open }) => {
  // Dummy product data, you can replace it with actual data from your backend
  const products = [
    { id: 1, name: 'Gus', price: 'Free', image: gus },
    // Add more products as needed
  ]

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
