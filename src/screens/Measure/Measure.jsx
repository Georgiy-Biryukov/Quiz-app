import React, { useContext, useState } from 'react'

import { MainContext } from 'QuizApp'
import { Button } from 'components/Button'
import { TextBlock } from 'components/TextBlock'
import { Form } from './components/Form'
import { Box } from './Measure.styled'
import { measureData } from './moc-data'

export const Measure = ({ store, setStore }) => {
  const [formValues, setFormValues] = useState({})
  const { onNextStep } = useContext(MainContext)
  const { title, subTitle } = measureData

  const isDisable = parseFloat(formValues?.height) && parseFloat(formValues?.weight) ? false : true

  const submitFn = () => {
    onNextStep()
    setStore({ ...store, measure: formValues })
  }

  return (
    <Box>
      <Form setFormValues={setFormValues} formValues={formValues} />
      <TextBlock title={title} subTitle={subTitle} />
      <Button text="Continue" handleClick={submitFn} disabled={!!isDisable} />
    </Box>
  )
}
