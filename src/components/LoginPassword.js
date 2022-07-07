/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState, useRef } from "react"

import SmartInput from "./SmartInput"
import { validatorEmail, validatorPassword } from '../Utils'

import '../index.css'
import Navigation from "./navigation"


export default function LoginPassword() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [validatedData, setValidatedData] = useState({ login: '', password: '' })
    const [resultIsShown, setResultIsShown] = useState(false)
    
    // начало работы с формой - undefinded, затем true/false при каждом onSubmit
    const [submit, setSubmit] = useState(undefined)
    
    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    const submitRef = useRef(null)

    // если форма прошшла валидацию, возвращает false, если нет - ссылку на первый элемент с ошибкой
    const isFormNotValid = () => {
      if (validatorEmail(login)) return loginRef
      if (validatorPassword(password)) return passwordRef
      return false
    }

    const onChangeHandler = () => {
      setLogin(loginRef.current.value)
      setPassword(passwordRef.current.value)
    }
    
    const onSubmit = (e) => {
      e.preventDefault()
              
      // скрываем результат, если он показан, и перезапускаем ццикл формы
      if (resultIsShown) {
        setResultIsShown(false)
        return
      }
      
      const res = isFormNotValid()
      if (res) {          
        // триггерим валилацию внутри инпутов
        setSubmit(submit === undefined ? true: !submit)
                  
        // переносим фокус на первый элемент, не прошедший валидацию
        res.current.focus()
              
      } else {
        setValidatedData({ login, password })
        
        // обнуляем данные формы
        setPassword('')
        setLogin('')
        setSubmit(undefined)           
        
        setResultIsShown(true)
        submitRef.current.focus()
      }
    }
        
    return (
      <>
        <Navigation />
        <form>
          <label>
            Логин:
            <SmartInput
              reff={loginRef}
              required
              validator={validatorEmail}
              onChangeHandler={onChangeHandler}
              inputValue={login}
              submit={submit}
            />
          </label>
          <br />
          <label>
            Пароль:
            <SmartInput
              reff={passwordRef}
              required
              fieldType='password'
              validator={validatorPassword}
              onChangeHandler={onChangeHandler}
              inputValue={password}
              submit={submit}
            />
          </label>
          <br />
          <button
            className="btn primary small"
            type="submit"
            onClick={onSubmit}
            onBlur={() => setResultIsShown(false)}
            ref={submitRef}
          >
            Ввод
          </button>
          <br />
          <br />
          {
            resultIsShown &&
            <div>
              <p>Login: {validatedData.login}</p>
              <p>Password: {validatedData.password}</p>
            </div>
          }
        </form>
      </>
    )
}
