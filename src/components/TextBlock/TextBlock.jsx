import React from 'react'

import { Box, Title, Text } from './TextBlock.styled'

export const TextBlock = ({ title, subTitle }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Text>{subTitle}</Text>
    </Box>
  )
}
