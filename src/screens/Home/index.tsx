import { Background } from '@components/shared/Background';
import SideMenu from '@components/shared/SideMenu';
import React from 'react';
import { 
  Container,
  MainContent,
  CTA,
  Description,
  Action,
  Arrow
} from './styles';
import TopMenu from '@components/shared/TopMenu';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Background>
     <Container>
      <SideMenu />
      <MainContent>
        <TopMenu />
        <CTA className='slideRight'>
          <Description>
            <h2>Innovation in Your Hands</h2>
            <p>Explore, Interact and Transform the Real Estate Market with Our Smart Interactive Table.</p>
          </Description>
          <Action>
            <p>START EXPERIENCE</p>
            <Arrow 
              src="/icons/arrow-long-right.svg" 
              onClick={() => navigate('/360')} 
            />
          </Action>
        </CTA>
      </MainContent>
     </Container>
    </Background>
  );
};

export default Homepage;
