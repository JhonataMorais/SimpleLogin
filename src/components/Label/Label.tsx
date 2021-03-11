import styled from 'styled-components'

export const Label = styled.label`
  font-size: 10px;
  text-transform: uppercase;
  display: block;
  text-align: left;
  color: ${props => props.theme.colors.purple[800]};

  &.error {
    color: ${props => props.theme.colors.error};
    text-transform: none;
  }
`
