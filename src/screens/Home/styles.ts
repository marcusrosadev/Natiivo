import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 32px 0 22px;
`

export const CTA = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  p, h2 {
    text-align: center;
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 32px;
    text-transform: uppercase;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: 100%;
    max-width: 597px;
    color: rgba(265, 265, 265, 0.7);
    font-weight: 500;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    font-size: 1.5rem;
  }
`;

export const Arrow = styled.img`
  padding: 12px;
  border-radius: 1000px;
  background-color: rgba(265, 265, 265, .08);
  box-shadow: inset 1px 1px 5px rgba(265, 265, 265, 0.32), 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;