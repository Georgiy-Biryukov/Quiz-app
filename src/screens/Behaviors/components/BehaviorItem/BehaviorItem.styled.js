import styled from 'styled-components'
import { colors } from '../../../../constants/colors'

export const Item = styled.li`
  list-style: none;
  border-radius: 15px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid;
  border-color: ${({ active }) => (active ? `${colors.green}` : `${colors.lightGrey}`)};
`

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${colors.dark};
  margin: 0;
`