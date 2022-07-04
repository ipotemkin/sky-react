import propTypes from 'prop-types'

import ColorCard from "./ColorCard"

export default function ColorsBoard({ colors }) {
        
    return (
        <div className="colors-board">
            {colors.map((color) => <ColorCard hexColor={color} key={crypto.randomUUID()}/>)}  
        </div>
    )
}

ColorsBoard.propTypes = {
    colors: propTypes.arrayOf(propTypes.string).isRequired
}
