import styled from 'styled-components'
import { colors } from '../../../../constants/colors'

export const Box = styled.div`
  position: relative;
  margin-bottom: 130px;
`

export const TabsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${colors.green};
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
`

export const Tab = styled.button`
  border: none;
  padding: 10px;
  color: ${colors.green};
  font-weight: 800;
  font-size: 12px;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  cursor: pointer;
  background: none;

  &:hover {
    background: ${colors.semiTransparentGreen};
  }
`

export const StyledForm = styled.form`
  position: absolute;
  right: 0;
  left: 0;
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  padding: 20px 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.25px;
  outline: none;

  &::placeholder {
    color: ${colors.dark};
  }
`
