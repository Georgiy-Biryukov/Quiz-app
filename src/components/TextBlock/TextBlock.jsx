import React from 'react'

import { Box, Title, Text } from './TextBlock.styled'

export const TextBlock = ({ title, subTitle }) => (
  <Box>
    <Title>{title}</Title>
    <Text>{subTitle}</Text>
  </Box>
)
