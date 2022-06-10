import { useState } from "react"

export default function minMaxFn({min, max}) {
  const [curCount, setCurCount] = useState(min)
  
  const incr = () => {
    if (curCount < max) setCurCount(curCount + 1)
  }

  const decr = () => {
    if (curCount > min) setCurCount(curCount - 1)
  }

  const validate = (value) => {
    if (!+value || +value < min) return min
    if (+value > max) return max
    return +value
  }
  
  const onChangeCount = (event) => {
    setCurCount(validate(event.target.value))
  }

  return (
    <div>
      <h1>Task #3: MinMaxFn</h1>
      
      <h2>Counter 1</h2>
      <button className="btn" type="button" onClick={decr}>-</button>
      <span> { curCount } </span>
      <button className="btn" type="button" onClick={incr}>+</button>
      
      <h2>Counter 2</h2>
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
