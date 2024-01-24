import React, { useContext } from 'react'

import { MainContext } from 'QuizApp'
import { TextBlock } from 'components/TextBlock'
import { Column, Text, GridBox, Image, ExerciseList, ExerciseItem } from './Exercise.styled'
import { exerciseData } from './moc-data'
import ExerciseImage from 'assets/images/physical_exercise.png'

export const Exercise = ({ store, setStore }) => {
  const { onNextStep } = useContext(MainContext)
  const { title, subTitle, question, answerOptions } = exerciseData

  const submitFn = (option) => {
    setStore({ ...store, exercise: option }, onNextStep())
  }
  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <Text $strong>{question}</Text>
      <GridBox>
        <Image src={ExerciseImage} alt="exercise-image" />
        <ExerciseList>
          {answerOptions.map(({ id, option }) => (
            <ExerciseItem onClick={() => submitFn(option)} key={id}>
              {option}
            </ExerciseItem>
          ))}
        </ExerciseList>
      </GridBox>
    </Column>
  )
}
