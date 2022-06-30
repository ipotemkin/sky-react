/* eslint-disable no-unused-vars */
import { useState } from "react"
import propTypes from 'prop-types'

export default function SmartInput({ 
  required,  // if the field is required
  placeholder,  // placeholder text
  fieldType,  // field type, e.g. 'text', 'password', etc.
  validator,  // a function to validate the input value
  defaultErrorText  // default error message shown when a required field is empty
}) {
  const [error, setError] = useState(false)
  const [fieldValue, setFieldValue] = useState('')
  const [errorText, setErrorText] = useState(defaultErrorText)

  const isError = (value) => {
    const res = validator(value)
    if (res) {
      setErrorText(res)
      return setError(true)
    }
    return false
  }

  const checkInput = () => {        
    if (required && fieldValue.length === 0) {
      setErrorText(defaultErrorText)
      return setError(true)
    }
    return isError(fieldValue)
  }
    
  const handleChange = (event) => {
    setError(false)
    setFieldValue(event.target.value)
  }

  return (
    <div>
      <input
        type={fieldType}
        value={fieldValue}
        placeholder={placeholder}
        onBlur={checkInput}
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
  defaultErrorText: propTypes.string
}

SmartInput.defaultProps = {
  required: false,
  placeholder: '',
  fieldType: 'text',
  validator: () => false,
  defaultErrorText: "Field is required"
}
