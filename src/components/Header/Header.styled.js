import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px 0;
  min-height: 50px;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 10px 0 0;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`

export const LogoWrapper = styled.div`
  max-width: 33px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  background-color: ${colors.silver};
  border-radius: 6px;
`

export const AppName = styled.p`
  color: ${colors.swampy};
  font-weight: 600;
  margin: 0;
`
