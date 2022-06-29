import React from "react"
import propTypes from 'prop-types'
import '../index.css'

export default class MinMax extends React.Component {
  constructor({ min, max }) {
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
        <button className="btn" type="button" onClick={this.decr}>-</button>
        <input type="text"
          value={ curCount }
          onChange={ e => this.setState({ curCount: e.target.value.replace(/\D/gi, '') }) }
          onBlur={this.onChangeCount}
          onKeyDown={ e => { if (e.code === 'Enter') this.onChangeCount(e) } }
          className="input-number right"
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
