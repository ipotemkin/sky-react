import './App.css'
import NumberGenerator from './components/NumberGenerator'

function App() {
  return (
    <div className="App">
      <NumberGenerator start={1} end={32}/>
    </div>
  )
}

export default App
