import styled from 'styled-components'

export const Box = styled.div`
  width: 85%;
  padding: 25px 25px 10px;
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 8px;
  margin-top: 50px;

  @media (min-width: 568px) {
    width: 60%;
    height: auto;
    padding: 0 10%;
  }

  @media (min-width: 1025px) {
    width: 45%;
    padding: 0 7%;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    @media (min-width: 568px) {
      font-size: 40px;
      width: 90%;
    }

    @media (min-width: 1025px) {
      text-align: left;
      margin: 0;
    }
  }

  h4 {
    font-size: 12px;
    font-weight: 600;
    margin: 15px 0;
    color: ${props => props.theme.colors.purple[200]};
  }

  label {
    margin: 10px;

    &.error {
      margin-top: 0;
    }
  }

  p {
    text-align: center;
    margin-bottom: 30px;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    margin: 0 auto;
    transform: translateY(34px);

    @media (min-width: 568px) {
      width: 100%;
      transform: none;
      margin: 15px 0 20px;
    }
  }

  &.error {
    border: 1px solid ${props => props.theme.colors.error}
  }
`
