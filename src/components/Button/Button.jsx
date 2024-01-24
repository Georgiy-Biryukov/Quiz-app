import React from 'react'
import { Button as StyledButton } from './Button.styled'

export const Button = ({ text, disabled, handleClick }) => (
  <StyledButton disabled={disabled} onClick={handleClick}>
    {text}
  </StyledButton>
)
