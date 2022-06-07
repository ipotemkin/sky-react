import { useState } from "react"

export default function ParagraphBtn() {
  const [isShown, setIsShown] = useState(true)
  const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ipsum numquam impedit asperiores, exercitationem cupiditate quod cum, aliquam laboriosam ducimus, libero adipisci tenetur placeat nesciunt officia ullam commodi. Nihil, corrupti."

  return (
    <div>
      <h1>Task #1: Hiding a paragraph</h1>
      <button type="button" onClick={() => {setIsShown(!isShown)}}>{isShown ? "Скрыть" : "Показать"}</button>
      <p>{isShown ? text : ""}</p>        
  </div>
  )
}