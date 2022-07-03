/* eslint-disable jsx-a11y/label-has-associated-control */

import './App.css'
// import FunnySelect from './components/FunnySelect'
// import SmartInput from './components/SmartInput'
// import MinMax from './components/MinMax'
// import { validatorEmail, validatorPassword } from './Utils'
import LoginPassword from './components/LoginPassword'


export default function App() {
  return (
    <div className="App">
      {/* <h2>Задача 1</h2>
      <MinMax />
      <br />
      
      <h2>Задача 2</h2>
      <p>Выберите загадку:</p>
      <br />
      <FunnySelect />
      <br /> */}
      
      <h2>Задача 1</h2>
      <br />
      <LoginPassword />
    </div>
  )
}
