import { useState } from "react"

export default function FunnySelect() {
  const data = [
    { id: 1, title: 'Абзац 1', text: 'Text1' },
    { id: 2, title: 'Абзац 2', text: 'Text2' },
    { id: 3, title: 'Абзац 3', text: 'Text3' },
  ]

  const [state, setState] = useState(data[0].id)

  function getText(id) {
    // вариант с filter
    // return data.filter(item => (item.id === +id))[0].text
    
    // варинт с индексом списка
    return data[Number(id)-1].text
  }
  
  return (
    <div>
      <select 
        value={state}
        onChange={e => setState(e.target.value)}
      >
        {data.map(item => (
          <option  value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <br />
      <br />
      <p>{getText(state)}</p>
    </div>
  )
}
