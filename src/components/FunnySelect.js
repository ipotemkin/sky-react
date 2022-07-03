import { useState } from "react"

import '../index.css'

export default function FunnySelect() {
  const data = [
    { id: 1, title: 'Загадка 1', text: 'Зимой и летом одним цветом', answer: 'ель' },
    { id: 2, title: 'Загадка 2', text: 'В лесу без огня котел кипит', answer: 'муравейник' },
    { id: 3, title: 'Загадка 3', text: 'На ямке, ямке сто ямок с ямкой', answer: 'напёрсток' },
  ]

  const [state, setState] = useState(data[0].id)
  const [answer, setAnswer] = useState(false)

  // варинт с индексом списка
  const getText = id => data[Number(id)-1].text
    
  // вариант с filter
  // const getText = id => data.filter(item => (item.id === +id))[0].text
    

  const getAnswer = id => <span>({data[Number(id)-1].answer})</span>
  
  return (
    <div>
      <select 
        value={state}
        onChange={e => {
          setState(e.target.value)
          setAnswer(false)
          }
        }
      >
        {data.map(item => (
          <option  value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <br />
      <br />
      <p>{getText(state)} { answer && getAnswer(state) }</p>
      <br />
      <button 
        className="btn primary small"
        type="button"
        onClick={() => setAnswer(!answer)}
      >
        {answer && "Скрыть ответ" || "Показать ответ"}
      </button>
    </div>
  )
}
