import React, { useContext } from 'react'

import { MainContext } from 'QuizApp'
import { Column, Text, Pre } from './Results.styled'

export const Results = () => {
  const { store } = useContext(MainContext)
  return (
    <Column>
      <Text $strong>Results</Text>
      <Pre>{JSON.stringify(store, null, 2)}</Pre>
    </Column>
  )
}
