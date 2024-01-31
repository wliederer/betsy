import './App.css'
import Header from './Components/Header'
import ProductGrid from './Components/ProductGrid'
import React, { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Header open={isOpen} setIsOpen={setIsOpen} />
      <ProductGrid />
    </div>
  )
}

export default App
