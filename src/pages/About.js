import React from 'react';

import { Container, Content, Logo } from '../styles/about';
import BackHeader from '../components/BackHeader';

const About = () => {
  return (
    <Container>
      <BackHeader path="/" />

      <Content>
        <Logo source={require('../images/logo-main.svg')} alt="Pet Store" />
        <h1>O seu aplicativo de compra de ração online.</h1>
        <p>Versão 1.0.0</p>
      </Content>
    </Container>
  );
};

export default About;
