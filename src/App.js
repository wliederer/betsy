import './App.css'
import Header from './Components/Header'
import Overlay from './Components/Overlay'
import ProductGrid from './Components/ProductGrid'
import React, { useState, useEffect } from 'react'
import SendEmail from './Components/SendEmail'
import { Rolly } from 'rolly-polly-polls'
import { ColorRing } from 'react-loader-spinner'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [poll, setPoll] = useState(null)

  const onLoad = (data) => {
    console.log(data)
  }
  const onPick = async (data) => {
    console.log('Pick Made', data)
    let body = poll
    //update pick
    for (const pick of body.picks) {
      if (data.pick.pickOption == pick.pickOption) {
        pick.count = data.pick.count
      }
    }
    await fetch(`https://vote-app-y704.onrender.com/polls/${poll._id}`, {
      method: 'PUT',
      headers: {
        'X-API-KEY': 'vote-or-die',
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
      body: JSON.stringify({
        _id: body._id,
        question: body.question,
        picks: body.picks,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        // console.log('Data received:', data)
        setPoll(data)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }

  useEffect(() => {
    fetch(
      `https://vote-app-y704.onrender.com/polls/search?question=How much are you willing to spend on a sticker?`,
      {
        headers: {
          'X-API-KEY': 'vote-or-die',
          'Content-Type': 'application/json',
          // Add other headers as needed
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        // console.log('Data received:', data)
        setPoll(data[0])
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }, [])

  return (
    <div className="App">
      <Header open={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Overlay /> : null}
      <div className="rolly">
        {poll ? (
          <Rolly
            title={poll.question}
            picks={poll.picks}
            pickMessage={
              'Thankyou for your pick! We have received your feedback'
            }
            onLoad={onLoad}
            onPick={onPick}
            theme={'betsy'}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            One Moment Free Api is Waking Up...
          </div>
        )}
      </div>
      <ProductGrid />
      <SendEmail />
    </div>
  )
}

export default App
