import { Background } from '@components/shared/Background';
import { Copyright } from '@screens/StandBy/styles';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { 
  Container,
  Wrapper,
  Banner,
  Content,
  Description,
  GuestActions,
  BrokerActions,
  Form,
  CreateAccountAction,
  ActionTitle,
  InputContainer
} from '@screens/Auth/Login/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Background>
      <Container className='h-100 slideRight'>
        <Wrapper>
          <Banner src='/images/auth-banner.png' />
          <Content>
            <h2>access the platform</h2>
            <Description>Access as a spectator by clicking let me in or log in as a broker.</Description>

            <GuestActions>
              <ActionTitle>JOIN AS GUEST</ActionTitle>
              <button className='hover-yellow' onClick={() => navigate('/home')}>LET ME IN</button>
            </GuestActions>

            <BrokerActions>
              <ActionTitle>I’M a broker</ActionTitle>
              <Form>
                <InputContainer className='hover-lighter'>
                  <input 
                    placeholder="Type your email" 
                    type="email" 
                    name="email" 
                    id="email" 
                  />
                </InputContainer>
                <InputContainer className='hover-lighter'>
                  <input 
                    placeholder="Type your password" 
                    name="password" 
                    id="password" 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='toggle-icon' onClick={handleTogglePassword}>
                    {showPassword ? <FaEye color='#FFF' size={18}/> : <FaEyeSlash color='#FFF' size={18}/>}
                  </div>
                </InputContainer>
                <button>
                  LOGIN
                  <img src="/icons/arrow-left-black.png" alt="arrow left black" />
                </button>
              </Form>

              <CreateAccountAction>
                Don’t have an account? 
                <span>Create new account</span>
              </CreateAccountAction>
            </BrokerActions>
          </Content>
        </Wrapper>
        <Copyright className='center'>© 2023 Natiivo Miami. All rights reserved.</Copyright>
      </Container>
    </Background>
  );
};

export default Login;
