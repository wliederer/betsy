import React from 'react'

export default function Coffee() {
  const path = `https://www.buymeacoffee.com/widget/page/kittyturbo?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%235F7FFF`

  return (
    <div>
      <iframe
        style={{
          height: '550px',
          width: '400px',
          border: 'none',
          overflow: 'hidden',
        }}
        src={path}
        scrolling="no"
      />
    </div>
  )
}
