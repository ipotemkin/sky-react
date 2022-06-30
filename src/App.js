import './App.css'
import FunnySelect from './components/FunnySelect'
import SmartInput from './components/SmartInput'
import MinMax from './components/MinMax'
import { validatorEmail, validatorPassword } from './Utils'


export default function App() {
  return (
    <div className="App">
      <h2>Задача 1</h2>
      <MinMax />
      <br />
      
      <h2>Задача 2</h2>
      <p>Выберите загадку:</p>
      <br />
      <FunnySelect />
      <br />
      
      <h2>Задача 3</h2>
      <p>Login:</p>
      <SmartInput
        required
        validator={validatorEmail}
      />
      <br />
      <p>Password:</p>
      <SmartInput
        required
        fieldType='password'
        validator={validatorPassword}
      />
    </div>
  )
}
