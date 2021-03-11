import styled from 'styled-components'

export const Banner = styled.div`
  display: none;

  @media (min-width: 568px) {
    display: block;
    height: 100vh;
    width: 40%;
    background-image: url('/static/img/banner-tablet.jpg');
    background-size: cover;
  }

  @media (min-width: 1025px) {
    background: url('/static/img/banner-desk.jpg') no-repeat;
    width: 55%;
  }
`
