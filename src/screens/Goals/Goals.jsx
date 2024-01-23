import React, { useContext } from 'react'

import { Column, Text, GoalsList } from './Goals.styled'
import { MainContext } from '../../QuizApp'
import { GoalItem } from './components/GoalItem'
import { TextBlock } from '../../components/TextBlock'
import { goalsData } from './moc-data'

export const Goals = ({ store, setStore }) => {
  const { onNextStep } = useContext(MainContext)
  const { title, subTitle, question, answerOptions } = goalsData

  const submitFn = (option) => {
    setStore({ ...store, goals: option }, onNextStep())
  }

  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <Text $strong>{question}</Text>
      <GoalsList>
        {answerOptions.map(({ image, option, id }) => (
          <GoalItem image={image} option={option} key={id} handleClick={submitFn} />
        ))}
      </GoalsList>
    </Column>
  )
}
