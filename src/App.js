import './App.css'
import MinMaxFn from './components/MinMaxFn'
import ParagraphBtn from './components/ParagraphBtn'
import { Squares, Squares2 } from './components/Squares'

function App() {
  return (
    <div className="App">
      <ParagraphBtn />
      <hr />
      <Squares />
      <hr />
      <Squares2 />
      <hr />
      <MinMaxFn min={5} max={20}/>      
      </div>
  )
}

export default App
