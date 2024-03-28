import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { productsArray } from './Utility'
import ProductCard from './ProductCard'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
export default function StickerCarousel() {
  const products = productsArray()

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </Carousel>
  )
}
