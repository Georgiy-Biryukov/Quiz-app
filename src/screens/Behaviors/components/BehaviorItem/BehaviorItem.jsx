import React, { useState } from 'react'
import { Item, Text } from './BehaviorItem.styled'

export const BehaviorItem = ({ option, icon: Icon, onItemClick, behaviors }) => {
  const [isActive, setActive] = useState(false)

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
    <Item onClick={handleClick} $active={isActive}>
      <Icon />
      <Text>{option}</Text>
    </Item>
  )
}
