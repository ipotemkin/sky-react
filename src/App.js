import './App.css'
// import PomodoroTracker from './components/PomodoroTracker'
// import Clock from './components/Clock'
import MinMaxFn from './components/MinMaxFn'
import ParagraphBtn from './components/ParagraphBtn'
// import ReacTimer from './components/ReacTimer'

function App() {
  return (
    <div className="App">
      <MinMaxFn min={5} max={20}/>      
      {/* <ReacTimer />
      <hr />
      <Clock />
      <hr />
      <PomodoroTracker /> */}
      <ParagraphBtn />
    </div>
  )
}

export default App
