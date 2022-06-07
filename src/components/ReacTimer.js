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

    handleStart = () => {
        this.setState({ isCounting: true })
    }

    handleStop = () => {
        this.setState({ isCounting: false })
    }

    handleReset = () => {
        this.setState({ count: 0, isCounting: false })
    }

    render() {
        const { count, isCounting } = this.state
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>{count}</h3>
                {!isCounting ? (
                    <button type="button" onClick={this.handleStart}>Start</button>
                ) : (
                    <button type="button" onClick={this.handleStop}>Stop</button>
                )}
                <button type="button" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}