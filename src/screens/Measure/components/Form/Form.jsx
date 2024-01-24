import React, { useState } from 'react'

import { useComponentVisible } from 'utils/hooks/useComponentVisible'
import { Box, TabsWrap, Tab, Input, StyledForm } from './Form.styled'

export const Form = ({ setFormValues, formValues }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const [isImperial, seIsImperial] = useState(false)
  const [isMetric, setIsMetric] = useState(false)

  const heightMeasure = isImperial ? 'ft' : 'm'
  const weightMeasure = isImperial ? 'ft' : 'kg'

  const clearInputValue = () => {
    ref.current.reset()
  }

  const onImperialTabClick = () => {
    if (isMetric) {
      clearInputValue()
      setFormValues({})
    }
    seIsImperial(true)
    setIsMetric(false)
    setIsComponentVisible(!isComponentVisible)
  }

  const onMetricTabClick = () => {
    if (isImperial) {
      clearInputValue()
      setFormValues({})
    }
    seIsImperial(false)
    setIsMetric(true)
    setIsComponentVisible(!isComponentVisible)
  }

  const handleBlur = (target) => {
    setFormValues({
      ...formValues,
      ...target,
    })
  }

  return (
    <Box>
      <TabsWrap>
        <Tab onClick={onImperialTabClick} $active={isImperial && isComponentVisible}>
          Imperial
        </Tab>
        <Tab onClick={onMetricTabClick} $active={isMetric && isComponentVisible}>
          Metric
        </Tab>
      </TabsWrap>
      <StyledForm ref={ref}>
        <Input
          type="number"
          placeholder={isImperial ? `Height(${heightMeasure})` : `Height(${heightMeasure})`}
          $visible={isComponentVisible}
          onBlur={({ target }) => handleBlur({ height: target.value + heightMeasure })}
        />
        <Input
          type="number"
          placeholder={
            isImperial ? `Current Weight(${weightMeasure})` : `Current Weight(${weightMeasure})`
          }
          $visible={isComponentVisible}
          onBlur={({ target }) => handleBlur({ weight: target.value + weightMeasure })}
        />
      </StyledForm>
    </Box>
  )
}
