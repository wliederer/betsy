import React from 'react'
import bmc from './images/bmc-button.png'

export default function CoffeeBtn() {
  return (
    <a href="https://www.buymeacoffee.com/kittyturbo">
      <img style={{ height: '50px' }} alt="Buy Me a Coffee Widget" src={bmc} />
    </a>
  )
}
