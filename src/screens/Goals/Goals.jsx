import React from 'react'

import { GoalItem } from './components/GoalItem'
import { TextBlock } from 'components/TextBlock'
import { goalsData } from './moc-data'
import { Column, Text, GoalsList } from './Goals.styled'

export const Goals = () => {
  const { title, subTitle, question, answerOptions } = goalsData

  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <Text $strong>{question}</Text>
      <GoalsList>
        {answerOptions.map(({ image, option, id }) => (
          <GoalItem image={image} option={option} key={id} />
        ))}
      </GoalsList>
    </Column>
  )
}
