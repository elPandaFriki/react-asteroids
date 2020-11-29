import React from 'react'
import { ReactAsteroids } from 'react-asteroids'

const App = () => {
  return (
    <div
      style={{
        height: window.innerHeight + 'px',
        width: window.innerWidth + 'px',
        backgroundColo: 'red'
      }}
    >
      <ReactAsteroids />
    </div>
  )
}

export default App
