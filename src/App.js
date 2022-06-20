import './App.css'
import BookCart from './components/BookCart'
import LoginPass from './components/LoginPass'
// import MinMaxFn from './components/MinMaxFn'
// import ParagraphBtn from './components/ParagraphBtn'
// import { Squares, Squares2 } from './components/Squares'

function App() {
  return (
    <div className="App">
      <h2>Task #1</h2><br />
      <BookCart />
      
      <br />
      <h2>Task #2</h2><br />
      <LoginPass
        placeholder="Login"
        required
      />
      <br />
      <LoginPass
        fieldType='password'
        placeholder="Password"
        required
      />
    </div>
  )
}

export default App
