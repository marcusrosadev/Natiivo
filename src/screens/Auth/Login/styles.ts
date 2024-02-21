import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background-color: rgba(0, 0, 0, .64);
  box-shadow: inset 1px 1px 5px 1px rgba(255, 255, 255, 0.32),
  0 109px 82px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  border-radius: 16px;

  padding: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    max-width: 1030px;
    gap: 48px;

    h2, input {
      text-align: left !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
`;

export const Banner = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;

  @media (min-width: 1024px) {
    max-width: 505px;
  }
`;

export const Content = styled.div`
  h2 {
    font-weight: 300;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3%;
    margin-bottom: 16px;
  }

  h2,p {
    text-align: center;
  }

  @media (min-width: 1024px) {
    h2,p {
      text-align: left;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  opacity: 70%;
  margin-bottom: 48px;
`;

export const GuestActions = styled.div`
  position: relative;
  padding-bottom: 32px;
  margin-bottom: 32px;

  button {
    font-size: 0.875rem;
    letter-spacing: .8px;
    font-weight: 500;
    padding: 13px 23px;
    background: rgba(265, 265, 265, .08);
    border-radius: 1000px;
    box-shadow: inset 1px 1px 5px 1px rgba(255, 255, 255, 0.32),
    0 4px 4px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    display: block;
    margin: 0 auto;

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6) 32%, rgba(255, 255, 255, 0));
    z-index: 1;
  }
`;

export const ActionTitle = styled.p`
  font-size: 0.875rem;
  color: #F6F6F6;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 32px;
  text-transform: uppercase;
    
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6) 32%, rgba(255, 255, 255, 0));
    z-index: 1;
  }
`;

export const BrokerActions = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    -webkit-autocomplete: off;
    -webkit-autofill: off;
    
    &::placeholder {
      color: #FFF
    }
  }

  button {
    margin-top: 32px;
    margin-bottom: 24px;
    background-color: #FFF;
    box-shadow: inset 1px 1px 5px 1px rgba(255, 255, 255, 0.32),
    0 4px 4px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    padding: 15.5px;
    border-radius: 1000px;

    color: #000;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: .8px;
    text-transform: uppercase;


    img {
      margin-left: 16px;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: rgba(265, 265, 265, 0.08);
  box-shadow: inset 1px 1px 5px 1px rgba(255, 255, 255, 0.32),
  0 4px 4px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background-color: transparent;
    text-align: center;
    color: #FFF;
    font-size: 0.875rem;
    padding: 14.5px 16px;
    width: 100%;
    position: relative;
  }

  .toggle-icon {
    margin-right: 16px;
    display: flex;
    position: absolute;
    right: 0;
  }
`;

export const CreateAccountAction = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 32px;
  margin-top: 24px;
  
  span {
    margin-left: 5px;
    color: #FFE08F;
    text-decoration: underline;
  }
`;
