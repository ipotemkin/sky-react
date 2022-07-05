import { useState } from "react";

import booksStub from "../../BooksStub";
import OrderDetail from "../../components/OrderDetail";
import formatAmount from "../../Utils";
import Navigation from "../../components/navigation";

export default function Order() {
  const [books, setBooks] = useState(booksStub())
  
  const calcTotal = (field) => {
    let total = 0
    books.forEach(element => {
        total += element[field]
    })
    return total
  }
  
  const calcTotalAmount = () => {
    let total = 0
    books.forEach(element => {
        total += element.price * element.quantity
    })
    return total
  }

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const totalQuantity = calcTotal('quantity')
  const totalPrice = formatAmount(calcTotalAmount())
  const totalRest = formatAmount(calcTotal('rest'))

  return (
    <>
      <Navigation />
      <div className="order">
        {books.map(book => {
          const { title, price, rest, quantity } = book;
          return <OrderDetail
            title={title}
            price={price}
            rest={rest}
            quantity={quantity}
            key={title}  
            onChange={quantity_ => setQuantity(book.id, quantity_)}
          />
        })}
      </div>
      <br />
      <p className="left">Total Quantity: <b>{totalQuantity}</b></p>
      <br />
      <p className="left">Total Price: <b>{totalPrice} / {totalRest}</b></p>
    </>
  )
}
