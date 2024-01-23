import React, { useContext, useState } from 'react'

import { MainContext } from '../../QuizApp'
import { Button } from '../../components/Button'
import { Form } from './components/Form'
import { Box } from './Measure.styled'
import { TextBlock } from '../../components/TextBlock'
import { measureData } from './moc-data'

export const Measure = ({ store, setStore }) => {
  const [formValues, setFormValues] = useState({})
  const { onNextStep } = useContext(MainContext)
  const { title, subTitle } = measureData

  const parseValue = (value) => parseFloat(value)
  const isDisable = parseValue(formValues?.height) && parseValue(formValues?.weight) ? false : true

  const submitFn = () => {
    onNextStep()
    setStore({ ...store, measure: formValues })
  }

  return (
    <Box>
      <Form setFormValues={setFormValues} formValues={formValues} />
      <TextBlock title={title} subTitle={subTitle} />
      <Button text="Continue" handleClick={submitFn} disabled={isDisable} />
    </Box>
  )
}
