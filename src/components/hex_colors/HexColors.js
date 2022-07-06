import { useState } from 'react'

import ColorsBoard from '../ColorsBoard'
import genColors from './helpers'

import '../../index.css'
import Navigation from '../navigation'

const COLOR_COUNT = 27


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
