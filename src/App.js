import './App.css'
import Header from './Components/Header'
import Overlay from './Components/Overlay'
import ProductGrid from './Components/ProductGrid'
import React, { useState } from 'react'
import SendEmail, { handleSendEmail } from './Components/SendEmail'
import { Rolly } from 'rolly-polly-polls'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const onLoad = (data) => {
    console.log(data)
  }
  const onPick = async (data) => {
    console.log('Pick Made', data)
    let message = data.title + ' ' + data.pick
    handleSendEmail(message)
  }

  return (
    <div className="App">
      <Header open={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Overlay /> : null}
      <div className="rolly">
        <Rolly
          title={'How much are you willing to spend on a sticker?'}
          picks={['1$', '2$', '3$', '4$', '5$', 'more!']}
          pickMessage={'Thankyou for your pick! We have received your feedback'}
          onLoad={onLoad}
          onPick={onPick}
          theme={'betsy'}
        />
      </div>
      <ProductGrid />
      <SendEmail />
    </div>
  )
}

export default App
