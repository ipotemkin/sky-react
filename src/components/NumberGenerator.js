/* eslint-disable no-plusplus */

import propTypes from 'prop-types'
import '../index.css'


// проверка на простое число
function isPrime(n) {
  if (n < 2) return false
  if (n === 2) return true

  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false
  
  return true
}


function SmartCell({ value, size }) {
  let color = value % 2 === 0 ? 'limegreen' : 'gold'
  
  // если число простое
  if (isPrime(value)) color = 'orangered'
  
  return (
    <div
      className="cell"
      style={{
        backgroundColor: color,
        width: size,
        height: size
      }}>
      {value}
    </div>
  )
}

SmartCell.propTypes = {
  value: propTypes.number.isRequired,
  size: propTypes.number.isRequired
}


export default function NumberGenerator({ start, end, size, width }) {
  const data = []
  for (let i = start; i <= end; i++) data.push(i)
 
  return (
    <div className='number-generator-board' style={{ width: (width + 1) * size }}>
      {data.map(item => <SmartCell value={item} size={size} key={item}/>)}
    </div>
  )
}

NumberGenerator.propTypes = {
  start: propTypes.number,
  end: propTypes.number,
  size: propTypes.number,
  width: propTypes.number
}

NumberGenerator.defaultProps = {
  start: 0,
  end: 10,
  size: 70,
  width: 8
}