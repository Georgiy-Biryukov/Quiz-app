import React, { useState } from 'react'
import { Item, Text } from './BehaviorItem.styled'
import { colors } from '../../../../constants/colors'

export const BehaviorItem = ({ option, icon, onItemClick, behaviors }) => {
  const [isActive, setActive] = useState(false)
  const Icon = icon

  const includeItem = () => onItemClick([...behaviors, option])
  const excludeItem = () => {
    const arrayWithoutItem = behaviors.filter((item) => item !== option)
    onItemClick([...arrayWithoutItem])
  }

  const handleClick = () => {
    setActive(!isActive)
    isActive ? excludeItem() : includeItem()
  }

  return (
    <Item
      onClick={() => handleClick()}
      style={{ borderColor: isActive ? colors.green : colors.lightGrey }}
    >
      <Icon />
      <Text>{option}</Text>
    </Item>
  )
}