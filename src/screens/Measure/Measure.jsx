import React, { useContext, useState } from 'react'

import { MainContext } from 'QuizApp'
import { Button } from 'components/Button'
import { TextBlock } from 'components/TextBlock'
import { Form } from './components/Form'
import { measureData } from './moc-data'
import { Box } from './Measure.styled'

export const Measure = () => {
  const { submitFn } = useContext(MainContext)
  const [formValues, setFormValues] = useState({})
  const { title, subTitle } = measureData

  const isDisable = parseFloat(formValues?.height) && parseFloat(formValues?.weight) ? false : true

  return (
    <Box>
      <Form setFormValues={setFormValues} formValues={formValues} />
      <TextBlock title={title} subTitle={subTitle} />
      <Button
        text="Continue"
        handleClick={() => submitFn({ measure: formValues })}
        disabled={isDisable}
      />
    </Box>
  )
}
