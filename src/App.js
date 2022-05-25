import './App.css'
import Book from './Book'

function App() {
  return (
    <div className="App">
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  )
}

export default App
