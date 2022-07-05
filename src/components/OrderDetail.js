/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import propTypes from 'prop-types'

import formatAmount from '../Utils'

import '../index.css'


export default function OrderDetail({ title, price, rest, quantity, onChange }) {
  const min = 0
  const validate = value => Math.min(rest, Math.max(min, Number(value) || min ))
  const [curCount, setCurCount] = useState(validate(quantity))

  useEffect(
    () => {onChange(curCount)},
    [curCount]
  )
  
  const incr = () => curCount < rest && setCurCount(curCount + 1)

  const decr = () => curCount > min && setCurCount(curCount - 1)
    
  return (
    <div className='book-card'>
      <h2 style={{color: 'black'}}>{title}</h2>
      <p style={{color: 'black'}} className='start'>Price: {formatAmount(price)} / {rest}</p>
      <p style={{color: 'black'}} className='start'>Quantity: {curCount}</p>
      <div className='btn-container'>
        <button className="btn danger" type="button" onClick={decr}>-</button>
        <button className="btn primary" type="button" onClick={incr}>+</button>
      </div>
    </div>
  )
}

OrderDetail.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  rest: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired
}
