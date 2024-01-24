import styled from 'styled-components'
import { colors } from 'constants/colors'

export const Button = styled.button`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  color: ${colors.white};
  padding: 12px 0;
  background-color: ${colors.green};
  border: none;
  border-radius: 12px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  margin-top: 130px;
  margin-bottom: auto;
  cursor: pointer;
`
