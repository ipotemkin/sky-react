import './App.css'
// import PomodoroTracker from './components/PomodoroTracker'
// import Clock from './components/Clock'
import MinMaxFn from './components/MinMaxFn'
import ParagraphBtn from './components/ParagraphBtn'
import Squares from './components/Squares'
// import ReacTimer from './components/ReacTimer'

function App() {
  return (
    <div className="App">
      <ParagraphBtn />
      <hr />
      <Squares />
      <hr />
      <MinMaxFn min={5} max={20}/>      
      </div>
  )
}

export default App
