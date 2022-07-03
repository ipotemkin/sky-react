import './App.css'
import HexColors from './components/HexColors'
import LoginPassword from './components/LoginPassword'


export default function App() {
  return (
    <div className="App">
      
      <h2>Задача 1</h2>
      <br />
      <LoginPassword />

      <br />
      <h2>Задача 2</h2>
      <br />
      <div className="center">
        <HexColors />
      </div>
    </div>
  )
}
