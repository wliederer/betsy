import './App.css'
import Header from './Components/Header'
import Overlay from './Components/Overlay'
import ProductGrid from './Components/ProductGrid'
import React, { useState } from 'react'
import SendEmail from './Components/SendEmail'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Header open={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Overlay /> : null}
      <ProductGrid />
      <SendEmail />
    </div>
  )
}

export default App
