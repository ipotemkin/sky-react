import './App.css'
import PomodoroTracker from './components/PomodoroTracker'
import Clock from './components/Clock'
// import MinMax from './components/MinMax'
import ReacTimer from './components/ReacTimer'

function App() {
  return (
    <div className="App">
      {/* <MinMax min={5} max={20}/> */}
      <ReacTimer />
      <hr />
      <Clock />
      <hr />
      <PomodoroTracker />
    </div>
  )
}

export default App
