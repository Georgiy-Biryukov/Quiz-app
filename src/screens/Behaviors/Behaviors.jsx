import React, { useContext, useState } from 'react'

import { MainContext } from 'QuizApp'
import { Button, TextBlock } from 'components'
import { BehaviorItem } from './components/BehaviorItem'
import { behaviorsData } from './moc-data'
import { Column, List } from './Behaviors.styled'

export const Behaviors = () => {
  const { submitFn } = useContext(MainContext)
  const [behaviors, setBehaviors] = useState([])
  const { title, subTitle, answerOptions } = behaviorsData

  const onItemClick = (option) => {
    setBehaviors(option)
  }

  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <List>
        {answerOptions.map(({ option, icon, id }) => (
          <BehaviorItem
            option={option}
            icon={icon}
            onItemClick={onItemClick}
            key={id}
            behaviors={behaviors}
          />
        ))}
      </List>
      <Button
        text="Continue"
        disabled={!behaviors.length}
        handleClick={() => submitFn({ behaviors })}
      />
    </Column>
  )
}
