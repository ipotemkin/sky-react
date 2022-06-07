import React from 'react'
// import './styles.css';


function zeroPrefix(value) {
    const res = String(value)
    return res.length < 2 ? `0${res}` : res
} 


function getTime() {
    const today = new Date()
    return `${zeroPrefix(today.getHours())}:${zeroPrefix(today.getMinutes())}:${zeroPrefix(today.getSeconds())}`
}

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: getTime()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(() => ({ time: getTime() }))
        }, 1000)
    }

    componentDidUpdate() {
        // без этого метода в этой задаче можно обойтись
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    render() {
        const { time } = this.state
        return (
            <div className="Clock">
                <h1>React Clock</h1>
                <h2>{time}</h2>
            </div>
        )
    }
}