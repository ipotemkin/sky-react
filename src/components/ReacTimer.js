import React from 'react'
// import './styles.css';

export default class ReacTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            isCounting: false,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.isCounting)
                this.setState(prevState => ({ count: prevState.count + 1 }))
        }, 1000)
    }

    componentDidUpdate() {
        // без этого метода в этой задаче можно обойтись
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    handleToggle = () => {
        this.setState(prevState => ({ isCounting: !prevState.isCounting}))
    }

    handleReset = () => {
        this.setState({ count: 0, isCounting: false })
    }

    render() {
        const { count, isCounting } = this.state
        const btnName = isCounting ? 'Stop' : 'Start'
        return (
            <div className="ReacTimer">
                <h1>Task #1: React Timer</h1>
                <h3>{count}</h3>
                    <button type="button" onClick={this.handleToggle}>{btnName}</button>
                <button type="button" onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}