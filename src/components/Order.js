import { useState } from "react";
import booksStub from "../BooksStub";
import OrderDetail from "./OrderDetail";

export default function Order() {
  const [books] = useState(booksStub())

  return (
    <div className="order">
      {books.map(book => {
        const { title, price, rest, quantity } = book;
        return <OrderDetail
          title={title}
          price={price}
          rest={rest}
          quantity={quantity}
          key={title}  
        />
      })}
    </div>
  )
}
