import { useEffect, useState } from "react"

export default function minMaxFn({ min=1, max, current, onChange={} }) {
  const [curCount, setCurCount] = useState(current)

  useEffect(
    () => {onChange(curCount)},
    [curCount]
  )
  
  const incr = () => curCount < max && setCurCount(curCount + 1)

  const decr = () => curCount > min && setCurCount(curCount - 1)

  const validate = value => Math.min(max, Math.max(min, Number(value) || min ))
    
  const onChangeCount = event => setCurCount(validate(event.target.value))

  return (
    <div>
      <button className="btn" type="button" onClick={decr}>-</button>
      <input type="text"
        value={ curCount }
        onChange={onChangeCount}
        className="input-number"
      />
      <button className="btn" type="button" onClick={incr}>+</button>
    </div>
  )
}
