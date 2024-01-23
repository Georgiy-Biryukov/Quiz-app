import React, { useContext, useState } from 'react'

import { MainContext } from '../../QuizApp'
import { Button } from '../../components/Button'
import { TextBlock } from '../../components/TextBlock'
import { Column, List } from './Behaviors.styled'
import { BehaviorItem } from './components/BehaviorItem'
import { behaviorsData } from './moc-data'

export const Behaviors = ({ store, setStore }) => {
  const [behaviors, setBehaviors] = useState([])
  const { onNextStep } = useContext(MainContext)
  const { title, subTitle, answerOptions } = behaviorsData

  const submitFn = () => {
    onNextStep()
    setStore({ ...store, behaviors })
  }

  const onItemClick = (option) => {
    setBehaviors(option)
  }

  return (
    <Column>
      <TextBlock title={title} subTitle={subTitle} />
      <List>
        {answerOptions.map((item) => {
          const { option, icon, id } = item
          return (
            <BehaviorItem
              option={option}
              icon={icon}
              onItemClick={onItemClick}
              key={id}
              behaviors={behaviors}
            />
          )
        })}
      </List>
      <Button text="Continue" disabled={!behaviors.length} handleClick={submitFn} />
    </Column>
  )
}
