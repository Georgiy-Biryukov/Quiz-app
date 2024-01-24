import styled from 'styled-components'
import { colors } from 'constants/colors'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${colors.dark};
  margin: 0;
`

export const Text = styled.p`
  font-weight: ${({ $strong }) => ($strong ? 700 : 400)};
  color: ${({ $strong }) => ($strong ? colors.dark : colors.grey)};
  text-align: center;
  margin: 0 0 15px;
  font-size: 14px;
`