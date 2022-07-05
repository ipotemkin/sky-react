import propTypes from 'prop-types'

import '../index.css'

export default function ColorCard({ hexColor }) {
  return (
    <div
      className="color-card"
      style={{backgroundColor: String(hexColor)}}
    >
      {hexColor}
      <img src="/icons8-shopping-bag-24.png" alt="shopping cart"
        style={{ width: 20 }}  
      />
    </div>
  )
}

ColorCard.propTypes = {
  hexColor: propTypes.string.isRequired
}
