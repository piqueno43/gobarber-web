import React from 'react';

import { Container, Header, HeaderContent, Profile, } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber"/>
          <Profile>
            <img src="https://avatars0.githubusercontent.com/u/2511491" alt=""/>
            <div>
              <span>Bem-vindo,</span>
              <span>Edivaldo Silva</span>
            </div>
          </Profile>
          <button type="button"><FiPower/></button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
