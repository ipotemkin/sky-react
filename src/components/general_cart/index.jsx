import formatAmount from "../../Utils"

import './index.css'

export default function GeneralCart({ totalCount, totalAmount }) {
  return (
    <div className="general-cart">
      <p><b>Total count: {formatAmount(totalCount)}</b></p>
      <p><b>Total amount: {formatAmount(totalAmount)}</b></p>
    </div>
  )
}