import React from 'react'
import { FloatingLabel, InputWrapper } from '../style'

const TextArea = (props: any) => {

    const { label, name, value, onChange, placeholder, error, isDisabled } = props

    return (
        <FloatingLabel>
            {/* <div className={`floating-label ${error ? 'wrong-input' : ''}`}> */}
            <InputWrapper>
                <label>{label}</label>
                <textarea disabled={isDisabled} className="floating-input" value={value} onChange={(e) => onChange ? onChange(e) : {}} autoComplete="off" name={name||""} placeholder={placeholder||" "} />
            </InputWrapper>
            {error ? <span className="error">{error}</span> : null}
        </FloatingLabel>
    )
}

export default TextArea