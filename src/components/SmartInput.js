import { useEffect, useState } from "react"
import propTypes from 'prop-types'

export default function SmartInput({ 
  required,           // if the field is required
  placeholder,        // placeholder text
  fieldType,          // field type, e.g. 'text', 'password', etc.
  validator,          // a function to validate the input value
  defaultErrorText,   // default error message shown when a required field is empty
  onChangeHandler,    // define to controll a StartInput value change
  inputValue,         // define to control the SmartInput value
  reff,               // to throw a ref
  submit              // field validation trigger
}) {
  const [error, setError] = useState(false)
  const [fieldValue, setFieldValue] = useState(inputValue || '')
  const [errorText, setErrorText] = useState(defaultErrorText)

  // обновляем начальные значения при перезапуске формы 
  useEffect(() => {
    setFieldValue(inputValue)
    setErrorText(defaultErrorText)
  }, [inputValue])
  
  const isError = value => {
    const res = validator(value)
    if (!res) return false
    
    setErrorText(res)
    return setError(true)
  }

  const checkInput = () => {            
    if (!(required && fieldValue.length === 0)) return isError(fieldValue)
    setErrorText(defaultErrorText)
    return setError(true)
  }
    
  // триггерит валидацию инпута
  useEffect(() => {
    if (submit !== undefined) checkInput()
  }, [submit])
  
  const handleChange = event => {
    setError(false)
    setFieldValue(event.target.value)
    if (onChangeHandler) onChangeHandler(event)
  }

  return (
    <div>
      <input
        ref={reff}
        type={fieldType}
        // value = {inputValue === undefined ? fieldValue : inputValue}
        // value = {Boolean(inputValue) ? inputValue : fieldValue}
        value = {inputValue || fieldValue}
        placeholder={placeholder}
        // onBlur={checkInput}  // если хотим проверку ввода при уходе фокуса с инпута
        onChange={handleChange}
      />
      <p style={{color: 'red'}}>{ error && errorText }</p>
  </div>
  )
}

// validator should return a string with an error message or an empty string if validated
SmartInput.propTypes = {
  required: propTypes.bool,
  placeholder: propTypes.string,
  fieldType: propTypes.string,
  validator: propTypes.func,
  defaultErrorText: propTypes.string,
  inputValue: propTypes.string,
  onChangeHandler: propTypes.func
}

SmartInput.defaultProps = {
  required: false,
  placeholder: '',
  fieldType: 'text',
  validator: () => false,
  defaultErrorText: "Field is required",
  inputValue: undefined,
  onChangeHandler: null
}
