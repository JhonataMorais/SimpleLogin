import styled from 'styled-components'

export const Button = styled.button`
  width: 168px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  padding: 0 17px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: block;
  outline: none;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.purple[600]} 0%, ${props.theme.colors.purple[500]} 75%)`};
`
