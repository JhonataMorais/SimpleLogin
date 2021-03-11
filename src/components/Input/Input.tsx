import styled from 'styled-components'

export const Input = styled.input`
  height: 48px;
  line-height: 48px;
  font-size: 10px;
  padding: 0 17px;
  border-radius: 8px;
  background-color: transparent;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.purple[200]};
  outline: none;

  &.error {
    border: 1px solid ${props => props.theme.colors.error}
  }
`
