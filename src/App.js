import './App.css'
import Header from './Components/Header'
import Overlay from './Components/Overlay'
import ProductGrid from './Components/ProductGrid'
import React, { useState, useEffect } from 'react'
import SendEmail from './Components/SendEmail'
import { Rolly } from 'rolly-polly-polls'
import { ColorRing } from 'react-loader-spinner'
import CoffeeBtn from './Components/CoffeeBtn'
import StickerCarousel from './Components/Carousel'
import Hero from './Components/Hero'
import FAQSection from './Components/FAQSection'
import OverlayCard from './Components/OverlayCard'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [poll, setPoll] = useState(null)
  const [isSent, setIsSent] = useState(true)
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="App">
      <Header open={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <SendEmail setIsSent={setIsSent} setShowPopup={setShowPopup} />
      {showPopup ? <OverlayCard message={"Your request has been received. Thank You!"} toggle={handleClose} /> : null}
      <FAQSection />
    </div>
  )
}

export default App
