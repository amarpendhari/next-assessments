import styled, { css } from "styled-components";

const FloatingLabel = styled.div`
    margin-bottom: 24px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    .error {
        color: red;
        font-size: 12px;
    }
`
const InputWrapper = styled.div`
    label {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        display: block;
        color: black;
    }
    input, textarea {
        background: white;
        border: 1px solid #e1e1e1;
        border: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: black;
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        &:focus-visible {
            outline: none;
        }
    }
`

export {
    FloatingLabel,
    InputWrapper
}