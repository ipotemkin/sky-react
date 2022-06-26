/* eslint-disable no-unused-vars */
import { useState } from 'react'

import '../index.css'


export default function OrderDetail({ title, price, rest, quantity }) {
  const min = 1
  const validate = value => Math.min(rest, Math.max(min, Number(value) || min ))
  const [curCount, setCurCount] = useState(validate(quantity))

  // useEffect(
  //   () => {onChange(curCount)},
  //   [curCount]
  // )
  
  const incr = () => curCount < rest && setCurCount(curCount + 1)

  const decr = () => curCount > min && setCurCount(curCount - 1)
    
  // const onChangeCount = event => setCurCount(validate(event.target.value))

  return (
    <div className='book-card'>
      <h2>{title}</h2>
      <p className='start'>Price: {price} / {rest}</p>
      <p className='start'>Quantity: {curCount}</p>
      <div className='btn-container'>
        <button className="btn danger" type="button" onClick={decr}>-</button>
        <button className="btn primary" type="button" onClick={incr}>+</button>
      </div>
    </div>
  )
}