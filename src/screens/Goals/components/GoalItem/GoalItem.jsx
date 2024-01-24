import React, { useContext } from 'react'

import { MainContext } from 'QuizApp'
import { Item, TextBox, Text, ImageBox } from './GoalItem.styled'

export const GoalItem = ({ image, option }) => {
  const { submitValues } = useContext(MainContext)
  return (
    <Item onClick={() => submitValues({ goal: option })}>
      <TextBox>
        <Text>{option}</Text>
      </TextBox>
      <ImageBox>
        <img src={image} alt="goal-img" />
      </ImageBox>
    </Item>
  )
}
