import { useState } from 'react'

import ColorsBoard from './ColorsBoard'

import '../index.css'
import Navigation from './navigation'

const COLOR_COUNT = 27

function getRandomColor() {
  const hexValueStr = (`00000${(Math.random()*0x1000000**0).toString(16)}`).slice(-6)
  return `#${hexValueStr}`
}
  
function genColors(count) {
  const data = []
  for ( let i = 0; i < count; i += 1) {
    data.push(getRandomColor())
  }
  return data
}


export default function HexColors() {
  const [colors, setColors] = useState(genColors(COLOR_COUNT))

  return (
    <>
      <Navigation />
      <div className="hex-colors">
        <h2>Hexadecimal Colors</h2>
        <div className="hex-colors__heading">
          <button
            className="btn info small"
            style={{ paddingLeft: 40, paddingRight: 40}}
            type="button"
            onClick={() => {setColors(genColors(COLOR_COUNT))}}
          >
            GENERATE
          </button>
        </div>
        <ColorsBoard colors={colors}/>
      </div>
    </>
  )
}
