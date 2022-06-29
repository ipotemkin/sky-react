import React from "react"
import propTypes from 'prop-types'

export default class MinMax extends React.Component {
  constructor({min, max}) {
    super({ min, max })
    this.state = { curCount: min }
    this.min = min
    this.max = max
  }
  
  incr = () => {
    if (this.state.curCount < this.max) 
    this.setState((prevState) => ({curCount: prevState.curCount + 1}))
  }

  decr = () => {
    if (this.state.curCount > this.min)
      this.setState((prevState) => ({curCount: prevState.curCount - 1}))
  }

  validate = (value) => {
    if (!+value) return this.min
    if (+value < this.min) return this.min
    if (+value > this.max) return this.max
    return +value
  }
  
  onChangeCount = (event) => {
    const { target } = event
    this.setState(() => ({ curCount: this.validate(target.value) }))
  }

  render() {
    const { curCount} = this.state
    
    return (
      <div>
        <h2>Counter 1</h2>
        <button className="btn" type="button" onClick={this.decr}>-</button>
        <span> { curCount } </span>
        <button className="btn" type="button" onClick={this.incr}>+</button>
        
        <h2>Counter 2</h2>
        <button className="btn" type="button" onClick={this.decr}>-</button>
        <input type="text"
          value={ curCount }
          onChange={this.onChangeCount}
          className="input-number"
        />
        <button className="btn" type="button" onClick={this.incr}>+</button>
      </div>
    )
  }
}

MinMax.propTypes = {
  min: propTypes.number,
  max: propTypes.number
}

MinMax.defaultProps = {
  min: 0,
  max: 10
}
