import { NavLink } from "react-router-dom"

import './index.css'

export default function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink className="App-link" to="/">Home</NavLink>
      <NavLink className="App-link" to="/numbers">Numbers</NavLink>
      <NavLink className="App-link" to="/colors">Colors</NavLink>
      <NavLink className="App-link" to="/about">About</NavLink>
    </nav>
  )
}