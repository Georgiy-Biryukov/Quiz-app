import styled from 'styled-components'

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
