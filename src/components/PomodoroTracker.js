import React from 'react'
// import './styles.css';

function zeroPrefix(value) {
    const res = String(value)
    return res.length < 2 ? `0${res}` : res
} 

function sec2MinSec(seconds) {
    const sec = seconds % 60
    const minutes = (seconds - sec) / 60
    return `${zeroPrefix(minutes)}:${zeroPrefix(sec)}`
}

export default class PomodoroTracker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 30 * 60,
            status: "stop" // "workTime", "longBreak", "shortBreak"
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { time, status } = this.state
            if (time <= 1) this.setState({ status: "stop" })
            if (status !== "stop")
                this.setState(prevState => ({ time: prevState.time - 1 }))
        }, 1000)
    }

    componentDidUpdate() {
        // без этого метода в этой задаче можно обойтись
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    handleWorkTime = () => {
        this.setState({ time: 30 * 60, status: "workTime" })
    }

    handleLongBreak = () => {
        this.setState({ time: 15 * 60, status: "longBreak" })
    }

    handleShortBreak = () => {
        this.setState({ time: 7 * 60, status: "shortBreak" })
    }

    disabled() {
        return this.state.status !== 'stop' ? 'disabled' : ''
    }

    render() {
        const { time } = this.state
        return (
            <div className="Clock">
                <h1>Task #3: Pomodoro Tracker</h1>
                <h2>{sec2MinSec(time)}</h2>
                
                <button type="button" onClick={this.handleWorkTime} disabled={this.disabled()}>
                    Work Time</button>
                
                <button type="button" onClick={this.handleLongBreak} disabled={this.disabled()}>
                    Long Break</button>
                
                <button type="button" onClick={this.handleShortBreak} disabled={this.disabled()}>
                    Short Break</button>
            </div>
        )
    }
}