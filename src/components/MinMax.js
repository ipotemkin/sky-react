import React from "react"

class MinMax extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curCount: props.min }
    this.min = props.min
    this.max = props.max
  }
  
  incr = () => {
    if (this.state.curCount < this.max)
      this.setState((prevState) => ({curCount: prevState.curCount + 1}))
  }

  decr = () => {
    if (this.state.curCount > this.min)
      this.setState((prevState) => ({curCount: prevState.curCount - 1}))
  }

  render() {
    const { curCount} = this.state
    
    return (
      <div>
        <h2>Counter</h2>
        <button className="btn" type="button" onClick={this.decr}>-</button>
        <span> { curCount } </span>
        <button className="btn" type="button" onClick={this.incr}>+</button>
      </div>
    )
  }
}

export default MinMax
