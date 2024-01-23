import React, { useState } from 'react'

import { Box, TabsWrap, Tab, Input, StyledForm } from './Form.styled'
import { useComponentVisible } from '../../../../utils/hooks/useComponentVisible'
import { colors } from '../../../../constants/colors'

export const Form = ({ setFormValues, formValues }) => {
  const [isImperial, seIsImperial] = useState(false)
  const [isMetric, setIsMetric] = useState(false)
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  const heightMeasure = isImperial ? 'ft' : 'm'
  const weightMeasure = isImperial ? 'ft' : 'kg'

  const clearInputValue = () => {
    ref.current.reset()
  }

  const onImperialTabClick = () => {
    isMetric && clearInputValue()
    isMetric && setFormValues({})
    seIsImperial(true)
    setIsMetric(false)
    setIsComponentVisible(!isComponentVisible)
  }

  const onMetricTabClick = () => {
    isImperial && clearInputValue()
    isImperial && setFormValues({})
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
        <Tab
          onClick={() => onImperialTabClick()}
          style={{
            background: isImperial && isComponentVisible && colors.semiTransparentGreen,
          }}
        >
          Imperial
        </Tab>
        <Tab
          onClick={() => onMetricTabClick()}
          style={{
            background: isMetric && isComponentVisible && colors.semiTransparentGreen,
          }}
        >
          Metric
        </Tab>
      </TabsWrap>
      <StyledForm ref={ref}>
        <Input
          type="number"
          placeholder={isImperial ? `Height(${heightMeasure})` : `Height(${heightMeasure})`}
          style={{ visibility: !isComponentVisible ? 'hidden' : 'visible' }}
          onBlur={({ target }) => handleBlur({ height: target.value + heightMeasure })}
        />
        <Input
          type="number"
          placeholder={
            isImperial ? `Current Weight(${weightMeasure})` : `Current Weight(${weightMeasure})`
          }
          style={{ visibility: !isComponentVisible ? 'hidden' : 'visible' }}
          onBlur={({ target }) => handleBlur({ weight: target.value + weightMeasure })}
        />
      </StyledForm>
    </Box>
  )
}
