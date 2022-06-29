/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useState } from 'react'
import MinMaxFn from './MinMaxFn'
import formatAmount from '../Utils'
import booksStub from '../BooksStub'

import "../index.css"


function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuatity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const removeBook = (id) => setBooks(books.filter(item => item.id !== id))

  const calcTotal = () => {
    let total = 0
    books.forEach(element => {
        total += element.price * element.quantity
    })
    return total
  }

  return (
    <div>
      <h1>Books List</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1} </td>
              <td className="pl-10 pr-10 left">{book.title} </td>
              <td className="pl-10 pr-10 right">{formatAmount(book.price)} </td>
              <td>
                <MinMaxFn
                  max={book.rest}
                  current={book.quantity}
                  onChange={quantity => setQuatity(book.id, quantity)}
                />
              </td>
              <td className="pl-10 pr-10 right">{ formatAmount(book.quantity * book.price) }</td>
              <td><button className="btn" type="button" onClick={() => removeBook(book.id)}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p><b>Grand total: {formatAmount(calcTotal())}</b></p>
    </div>
  )
}

export default BookCart