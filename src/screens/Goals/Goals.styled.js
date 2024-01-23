import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-weight: ${({ $strong }) => ($strong ? 700 : 400)};
  color: ${({ $strong }) => ($strong ? colors.dark : colors.grey)};
  text-align: center;
  margin: 0 0 15px;
`

export const GoalsList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`
