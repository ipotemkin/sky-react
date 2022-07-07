import { useEffect, useState } from "react"
import propTypes from 'prop-types'


export default function MinMaxFn({ min, max, current, onChange }) {
  const validate = value => Math.min(max, Math.max(min, Number(value) || min ))
  
  const [curCount, setCurCount] = useState(validate(current))

  useEffect(
    () => {onChange(curCount)},
    [curCount]
  )
  
  const incr = () => curCount < max && setCurCount(curCount + 1)

  const decr = () => curCount > min && setCurCount(curCount - 1)
    
  const onChangeCount = event => setCurCount(validate(event.target.value))

  return (
    <div>
      <button className="btn primary" type="button" onClick={decr}>-</button>
      <input type="text"
        value={ curCount }
        onChange={onChangeCount}
        className="input-number"
      />
      <button className="btn primary" type="button" onClick={incr}>+</button>
    </div>
  )
}

MinMaxFn.propTypes = {
  min: propTypes.number,
  max: propTypes.number.isRequired,
  current: propTypes.number.isRequired,
  onChange: propTypes.func
}

MinMaxFn.defaultProps = {
  min: 1,
  onChange: () => {}
}
