import React, { useContext } from 'react'
import { Header as StyledHeader, Button, LogoWrapper, AppName } from './Header.styled'
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg'
import { ReactComponent as LeftArrowIcon } from 'assets/icons/arrow-left.svg'

import { MainContext } from 'QuizApp'

export const Header = () => {
  const { onBackStep, step } = useContext(MainContext)

  return (
    <StyledHeader>
      <Button onClick={() => onBackStep(1)} hidden={step === 1}>
        <LeftArrowIcon />
      </Button>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <AppName>Food Mentor</AppName>
    </StyledHeader>
  )
}
