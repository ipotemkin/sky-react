import './App.css'
import FunnySelect from './components/FunnySelect'
import MinMax from './components/MinMax'

function App() {
  return (
    <div className="App">
      <h2>Задача 1</h2>
      <MinMax />
      <br />
      <h2>Задача 2</h2>
      <h3>Выберите абзац:</h3>
      <br />
      <FunnySelect />
    </div>
  )
}

export default App
