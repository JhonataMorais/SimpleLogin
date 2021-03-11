import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: url('/static/img/banner-mobile.jpg') no-repeat ${props => props.theme.colors.purple[800]};
  background-size: 100%;

  @media (min-width: 568px) {
    flex-direction: row;
    background: none;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  @media (min-width: 1025px) {
    align-items: center;
  }

  &.error {
    border: 1px solid ${props => props.theme.colors.error}
  }

  .forgotPassword {
    margin-top: 55px;

    @media (min-width: 568px) {
      margin-top: 10px;
    }

    p {
      text-align: center;
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      line-height: 20px;

      @media (min-width: 568px) {
        margin: 0;
        color: ${props => props.theme.colors.purple[800]};
      }

      a {
        color: ${props => props.theme.colors.white};
        text-decoration: underline;

        @media (min-width: 568px) {
          color: ${props => props.theme.colors.purple[800]};
        }
      }
    }
  }
`
