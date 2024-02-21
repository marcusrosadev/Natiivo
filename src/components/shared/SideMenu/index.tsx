import { useState } from "react";
import { 
  Container,
  MainActions,
  Action,
  Image,
  Divider,
  SecondaryActions,
  OpenMenuAction
 } from "./styles";
 import { useNavigate } from 'react-router-dom';

const SideMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const navigate = useNavigate();
  const actionsImages = [
    { imageSrc: "/icons/passador-arrow-right.png" },
    { imageSrc: "/icons/passador-arrow-left.png" },
    { imageSrc: "/icons/passador-arrow-right-1.png" },
    { imageSrc: "/icons/passador-arrow-right-2.png" },
    { imageSrc: "/icons/passador-arrow-right-3.png" },
    { imageSrc: "/icons/passador-arrow-right-4.png" },
  ];

  return (
    <Container menuopen={menuOpen.toString()}>
      <MainActions>
        {actionsImages.map((action, index) => (
          <Action key={index}>
            <Image src={action.imageSrc}/>
            {
              index < actionsImages.length - 1 && 
              <Divider src="/icons/doted-line.png"/>
            }
          </Action>
        ))}
      </MainActions>

      <SecondaryActions>
        <Action>
          <Image src="/icons/sidemenu-help.png"/>
        </Action>
        <Action>
          <Image src="/icons/sidemenu-quit.png" onClick={() => navigate('/')} />
        </Action>
      </SecondaryActions>

      <OpenMenuAction onClick={() => setMenuOpen(!menuOpen)}>
        {
          menuOpen ? 
          <img 
            className="open-menu--btn" 
            src="/icons/expand-cards.png" 
            alt="open menu button" 
          /> :
          <img 
            className="close-menu--btn" 
            src="/icons/shrink-cards.png" 
            alt="close menu button" 
          />
        }
      </OpenMenuAction>
    </Container>
  )
}

export default SideMenu;
