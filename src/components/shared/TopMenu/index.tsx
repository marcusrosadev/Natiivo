import { useState } from "react";
import { 
  Container, 
  Nav, 
  NavItem, 
  Contents,
  Logo,
  Profile,
  ProfilePic
  } from "./styles";

const TopMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleActiveItem = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <Container>
      <Nav>
        <NavItem onClick={() => handleActiveItem('home')} active={activeItem === 'home' && 'true' || 'false'}>
          HOME
        </NavItem>
        <NavItem onClick={() => handleActiveItem('project')} active={activeItem === 'project' && 'true' || 'false'}>
          PROJECT
        </NavItem>
        <NavItem onClick={() => handleActiveItem('sales')} active={activeItem === 'sales' && 'true' || 'false'}>
          SALES
        </NavItem>
      </Nav>
      <Contents>
        <Profile>
          <ProfilePic src="/icons/profile-pic.png" />
        </Profile>
        <Logo src="/images/logo-mini.png" />
      </Contents>
    </Container>
  )
}

export default TopMenu;
