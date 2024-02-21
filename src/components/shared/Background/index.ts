import styled from "styled-components";

export const Background = styled.div`
  background-image: url('/images/background-HOME.png');
  margin: 0;
  padding: 0;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1300px) {
    background-size: cover;
  }

  .h-100 {
    height: 100vh;
  }
`