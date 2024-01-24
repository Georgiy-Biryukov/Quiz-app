import styled from 'styled-components'
import { colors } from 'constants/colors'

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

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
`

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`

export const ExerciseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  padding: 0;
  margin: 0;
`

export const ExerciseItem = styled.li`
  list-style: none;
  border: 1px solid ${colors.lightGrey};
  border-radius: 20px;
  padding: 18px 15px;
  color: ${colors.dark};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: left;
  min-height: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
