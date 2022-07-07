import { Routes as ReactRoutes, Route } from 'react-router-dom'
import HexColors from './components/hex_colors/HexColors'
import LoginPassword from './components/LoginPassword'
import NumberGenerator from './components/NumberGenerator'
import FunnySelect from './components/FunnySelect'
import Order from './pages/order'
import BookCart from './pages/book_cart'
import Home from './pages/home'
import About from './pages/about'
import Page404 from './pages/page404'
// import OrderDetail from './components/OrderDetail'
import BookCard from './pages/book_card'

export default function Routes() {
  return (
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/numbers" element={<NumberGenerator />} />
        <Route path="/colors" element={<HexColors />} />
        <Route path="/login" element={<LoginPassword />} />
        <Route path="/select" element={<FunnySelect />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<BookCart />} />
        <Route path="/cart/:id" element={<BookCard />} />        
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </ReactRoutes>
  )
}
