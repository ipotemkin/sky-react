import { useState } from "react"

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */ 

function Square({color, size=100, onClick = () => {}}) {
  const style = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: 10
  }
  
  return <div className="square" style={style} onClick={onClick}/>
}

export default function Squares() {
  const [status, setStatus] = useState(true)

  const click = () => {
    setStatus(!status)
  }

  return (
    <div>
      <h1>Task #2: Two squares</h1>
      <div className="center">
          <Square color='blue'/>
          <Square color={status ? 'green' : 'red'} onClick={click}/>
      </div>
  </div>
  )
}
