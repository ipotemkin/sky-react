import './App.css'
// import Book from './Book'
import MinMax from './components/MinMax'

function App() {
  return (
    <div className="App">
      <MinMax min={5} max={10}/>
      {/* <h1 id="hello" className="class1">
        Hello from React
      </h1>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
      <Book name="React" year="2020" price="1200" />
      <Book name="Vue JS" year="2019" price="1100" /> */}
    </div>
  )
}

export default App
