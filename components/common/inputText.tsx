import React from 'react'
import { FloatingLabel, InputWrapper } from '../style'

const TextInput = (props: any) => {

    const { label, name, value, onChange, placeholder, error, isDisabled } = props

    return (
        <FloatingLabel>
            {/* <div className={`floating-label ${error ? 'wrong-input' : ''}`}> */}
            <InputWrapper>
                <label>{label}</label>
                <input disabled={isDisabled} className="floating-input" value={value} onChange={(e) => onChange ? onChange(e) : {}} autoComplete="off" name={name||""} type="text" placeholder={placeholder||" "} />
            </InputWrapper>
            {error ? <span className="error">{error}</span> : null}
        </FloatingLabel>
    )
}

export default TextInput