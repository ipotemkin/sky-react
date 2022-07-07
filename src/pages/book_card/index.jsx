import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import booksStub from "../../BooksStub";
import Navigation from "../../components/navigation";
import OrderDetail from "../../components/OrderDetail";

import '../../index.css'

export default function BookCard() {
  const [goBack, setGoBack] = useState(false)

  const books = booksStub()
  const { id } = useParams()
  const book = books.find(element => element.id === Number(id))

  if (!book) setTimeout(() => setGoBack(true), 1000)

  return (
    <>
      <Navigation />
      
      {goBack && <Navigate to="/cart" />}      
      {!book && <p>Нет такой книги</p>}
      
      {book &&
        <OrderDetail
          title={book.title}
          price={Number(book.price)}
          rest={Number(book.rest)}
          quantity={Number(book.quantity)}
          onChange={() => {}}
      />}
    </>
  )
}
