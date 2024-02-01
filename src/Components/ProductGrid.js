import React from 'react'
import './ProductGrid.css'
import nun from './images/nun.JPG'
import gus from './images/gus.JPG'
import cowboy from './images/cowboy.JPG'
import ProductCard from './ProductCard'

const ProductGrid = ({ open }) => {
  // Dummy product data, you can replace it with actual data from your backend
  const products = [
    { id: 1, name: 'Nun With Cat', price: 'Free', image: nun },
    { id: 2, name: 'Gus', price: 'Free', image: gus },
    { id: 3, name: 'Cowboy', price: 'Free', image: cowboy },
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
