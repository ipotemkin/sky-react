import { useState } from "react"

export default function LoginPass({ required = false, placeholder='', fieldType='text' }) {
    const [error, setError] = useState(false)
    const [fieldValue, setFieldValue] = useState('')

    const checkInput = () => required && fieldValue.length === 0 && setError(true)

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
            <p style={{color: 'red'}}>{error && "Field is required"}</p>
        </div>
    )
}