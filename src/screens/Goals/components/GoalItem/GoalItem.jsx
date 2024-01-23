import React from 'react'
import { Item, TextBox, Text, ImageBox } from './GoalItem.styled'

export const GoalItem = ({ image, option, handleClick }) => {
  return (
    <Item onClick={() => handleClick(option)}>
      <TextBox>
        <Text>{option}</Text>
      </TextBox>
      <ImageBox>
        <img src={image} alt="goal-img" />
      </ImageBox>
    </Item>
  )
}
