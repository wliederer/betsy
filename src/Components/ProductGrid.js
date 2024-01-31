import React from 'react'
import './ProductGrid.css'
import nun from './images/nun.JPG'
import ProductCard from './ProductCard'

const ProductGrid = ({ open }) => {
  // Dummy product data, you can replace it with actual data from your backend
  const products = [
    { id: 1, name: 'Nun With Cat', price: '$10', image: nun },
    { id: 2, name: 'Product 2', price: '$15', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$20', image: 'product3.jpg' },
    // Add more products as needed
  ]

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id}>
          {/* <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Add to Cart</button> */}
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
