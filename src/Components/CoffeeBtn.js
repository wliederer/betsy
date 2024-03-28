import React from 'react'
import bmc from './images/bmc-button.png'

export default function CoffeeBtn() {
  return (
    <div style={{ margin: '10px' }}>
      <a
        href="https://www.buymeacoffee.com/kittyturbo"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ height: '50px' }}
          alt="Buy Me a Coffee Widget"
          src={bmc}
        />
      </a>
    </div>
  )
}
