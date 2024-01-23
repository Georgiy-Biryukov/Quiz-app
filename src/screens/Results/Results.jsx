import React from 'react'

import { Column, Text, Pre } from './Results.styled'

export const Results = ({ store }) => {
  return (
    <Column>
      <Text $strong>Results</Text>
      <Pre>{JSON.stringify(store, null, 2)}</Pre>
    </Column>
  )
}
