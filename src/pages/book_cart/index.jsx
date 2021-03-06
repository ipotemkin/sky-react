/* eslint-disable no-unused-vars */

import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import MinMaxFn from '../../components/MinMaxFn'
import formatAmount from '../../Utils'
import booksStub from '../../BooksStub'
import GeneralCart from '../../components/general_cart'
import Navigation from '../../components/navigation'

import "../../index.css"


export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuatity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const removeBook = (id) => setBooks(books.filter(item => item.id !== id))

  const calcTotal = () => books.reduce((sum, current) => (sum + current.price * current.quantity), 0)
  
  const calcTotalCount = () => books.reduce((sum, current) => (sum + current.quantity), 0)

  return (
    <>
      <Navigation />
      <div>
        <h1>Books List</h1>
        <br />
        <hr />
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {books.map((book, i) => (
              <tr key={book.id}>
                <td>{i + 1} </td>
                {/* <td className="pl-10 pr-10 left">{book.title} </td> */}
                <td className="pl-10 pr-10 left">
                  <Link className="App-link" style={{ textAlign: 'left' }} to={`/cart/${book.id}`}>
                    {book.title}
                  </Link>
                </td>
                <td className="pl-10 pr-10 right">{formatAmount(book.price)} </td>
                <td>
                  <MinMaxFn
                    max={book.rest}
                    current={book.quantity}
                    onChange={quantity => setQuatity(book.id, quantity)}
                  />
                </td>
                <td className="pl-10 pr-10 right">{ formatAmount(book.quantity * book.price) }</td>
                <td><button className="btn danger small" type="button" onClick={() => removeBook(book.id)}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <br />
        {/* <p><b>Grand total: {formatAmount(calcTotal())}</b></p> */}
        <GeneralCart
          totalAmount={ calcTotal() }
          totalCount={ calcTotalCount() }/>
      </div>
    </>
  )
}
