import './App.css'
import { Routes, Route } from 'react-router-dom'
import HexColors from './components/HexColors'
import LoginPassword from './components/LoginPassword'
import NumberGenerator from './components/NumberGenerator'
import FunnySelect from './components/FunnySelect'
import Order from './components/Order'
import BookCart from './components/BookCart'
import Home from './pages/home'
import About from './pages/about'
import Page404 from './pages/page404'

export default function App() {
  return (
    <div className="App App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/numbers" element={<NumberGenerator  />} />
        <Route path="/colors" element={<HexColors />} />
        <Route path="/login" element={<LoginPassword />} />
        <Route path="/select" element={<FunnySelect />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<BookCart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* <h2>Задача 1</h2>
      <br />
      <LoginPassword />

      <br />
      <h2>Задача 2</h2>
      <br />
      <div className="center">
        <HexColors />
      </div> */}
    </div>
  )
}
