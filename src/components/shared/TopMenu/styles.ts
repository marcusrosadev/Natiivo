import styled from "styled-components";

interface NavLinkProps {
  active: string;
}

export const Container = styled.div`
  margin-top: 41px;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 23px;
  letter-spacing: 1.5px;
  border-bottom: 1px solid rgba(265, 265, 265, .32);
  padding-bottom: 11px;
  flex: 1;
  position: relative;
`;

export const NavItem = styled.div<NavLinkProps>`
  color: rgba(265, 265, 265, .8);

  ${({ active }) => active === 'true' && `
    font-weight: 600;
    color: #FFF;
    position: relative;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #FFF;
  `}
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Logo = styled.img`
  display: block;
`;

export const Profile = styled.div`

`;

export const ProfilePic = styled.img`
  display: block;
`;