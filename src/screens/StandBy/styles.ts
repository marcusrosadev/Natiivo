import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;

  .stand-by--action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }
`;

export const Logo = styled.img`
  margin-bottom: 80px;
`;

export const Arrow = styled.img`
  margin-top: 32px;
  max-width: 50px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2)
  }
`;

export const Title = styled.p `
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 4px;
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  margin-bottom: 32px;
`