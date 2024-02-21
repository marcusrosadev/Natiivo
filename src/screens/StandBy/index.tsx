import React from 'react';
import { Container, Logo, Arrow, Copyright, Title } from "./styles";
import { Background } from '@components/shared/Background';
import { useNavigate } from 'react-router-dom';

const StandBy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container className='h-100'>
        <div className='stand-by--action slideRight'>
          <Logo src="/images/logo-HOME.png" />
          <Title>START EXPERIENCE</Title>
          <Arrow 
            src="/icons/arrow-right-HOME.png" 
            onMouseOver={() => navigate('/login')} 
            onClick={() => navigate('/login')} 
          />
        </div>
        <Copyright>© 2023 Natiivo Miami. All rights reserved.</Copyright>
      </Container>
    </Background>
  );
};

export default StandBy;
