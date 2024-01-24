import React, { useContext } from 'react'

import { MainContext } from 'QuizApp'
import { TextBlock } from 'components/TextBlock'
import { exerciseData } from './moc-data'
import ExerciseImage from 'assets/images/physical_exercise.png'
import { Column, Text, GridBox, Image, ExerciseList, ExerciseItem } from './Exercise.styled'

export const Exercise = () => {
  const { submitValues } = useContext(MainContext)
  const { title, subTitle, question, answerOptions } = exerciseData

  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <Text $strong>{question}</Text>
      <GridBox>
        <Image src={ExerciseImage} alt="exercise-image" />
        <ExerciseList>
          {answerOptions.map(({ id, option }) => (
            <ExerciseItem onClick={() => submitValues({ exercise: option })} key={id}>
              {option}
            </ExerciseItem>
          ))}
        </ExerciseList>
      </GridBox>
    </Column>
  )
}
