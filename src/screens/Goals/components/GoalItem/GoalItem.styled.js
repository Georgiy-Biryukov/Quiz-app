import styled from 'styled-components'
import { colors } from '../../../../constants/colors'

export const Item = styled.li`
  max-width: 172px;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${colors.lightGrey};
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(213.67deg, #f1f1f1 12.33%, #ffffff 69.93%),
    linear-gradient(0deg, #e1e1e1, #e1e1e1);
`
export const TextBox = styled.div`
  width: 50%;
  padding-left: 10px;
`
export const Text = styled.p`
  font-size: 16px;
  color: ${colors.dark};
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  margin: 0;
`
export const ImageBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  height: 100%;
`
