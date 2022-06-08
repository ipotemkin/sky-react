import { useState } from "react"

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */ 

function Square({color, size=100, onClick = () => {}, visible=true, cls=''}) {
  const style = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: 10,
    display: visible ? 'block' : 'none'
  }
  
  return <div className={`square ${cls}`} style={style} onClick={onClick}/>
}

export function Squares() {
  const [status, setStatus] = useState(true)

  const click = () => {
    setStatus(!status)
  }

  return (
    <div>
      <h1>Task #2: Two squares with a Square component</h1>
      <div className="center">
        <div className="container">
            <Square color='blue' cls="el-1"/>
            <Square color='green' cls="el-2" visible={status} onClick={click}/>
            <Square color='red' cls="el-3" visible={!status} onClick={click}/>
        </div>
      </div>
  </div>
  )
}


export function Squares2() {
  const [status, setStatus] = useState(true)

  const click = () => {
    setStatus(!status)
  }

  return (
    <div>
      <h1>Task #2.1: Two squares with a pure div</h1>
      <div className="center">
        <div className="container">
            <div className="square el-1" style={{backgroundColor: 'blue'}} onClick={click}/>
            <div className="square el-2" style={{backgroundColor: 'green', display: status ? 'block' : 'none'}} onClick={click}/>
            <div className="square el-3" style={{backgroundColor: 'red', display: !status ? 'block' : 'none'}} onClick={click}/>
        </div>
      </div>
  </div>
  )
}
