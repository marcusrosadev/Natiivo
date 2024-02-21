import styled from "styled-components";

interface ContainerProps {
  menuopen: string;
}

export const Container = styled.nav<ContainerProps>`
  padding: 32px 31px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0px);


  ${({ menuopen }) => menuopen === 'false' && `
    transform: translateX(-64px);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.32) 30%, rgba(255, 255, 255, 0.32) 60%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0));
  }
`

export const MainActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  transition: transform .2s ease-in;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Divider = styled.img`
`

export const SecondaryActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: auto;
`

export const OpenMenuAction = styled.div`
  position: absolute;
  top: 46%;
  right: 0;
  transform: translate(46%, -50%);
  display: block;

  img {
    display: block;
    width: 56px;
    height: 56px;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(1.2);
    }
  }
`