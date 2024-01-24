import styled from 'styled-components'
import { colors } from 'constants/colors'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Pre = styled.pre`
  font-size: min(5vw, 24px);
  white-space: pre-line;
  color: ${colors.grey};
`

export const Text = styled.p`
  font-size: 24px;
  font-weight: ${({ $strong }) => ($strong ? 700 : 400)};
  color: ${({ $strong }) => ($strong ? colors.dark : colors.grey)};
  text-align: center;
  margin: 0 0 15px;
`
