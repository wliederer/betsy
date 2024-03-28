import React from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'
import { productsArray } from './Utility'

const ProductGrid = ({ open }) => {
  const products = productsArray()

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
