import React, { Component } from 'react';

import {
  Container,
  Header,
  Logo,
  Content,
  ButtonContainer,
  ImageContainer,
  Facebook,
  Google,
  VisitContainer,
  VisitButton,
  Dog,
} from '../styles/login';

export default class Login extends Component {
  home = () => {
    window.location.href = '/';
  };

  render() {
    return (
      <Container>
        <img src={require('../images/food.png')} className="food" alt="Ração" />
        <Header>
          <h1>Bem vindo ao</h1>
          <Logo source={require('../images/logo-main.svg')} alt="Pet Store" />
        </Header>
        <img
          src={require('../images/food-2.png')}
          className="food2"
          alt="Ração"
        />

        <Content>
          <h2>Acesse usando sua conta</h2>
          <ButtonContainer>
            <Facebook>
              <ImageContainer>
                <img
                  src={require('../images/facebook.svg')}
                  width="11px"
                  height="21px"
                  alt="Facebook"
                />
              </ImageContainer>
              <span>Facebook</span>
            </Facebook>
            <Google>
              <ImageContainer>
                <img
                  src={require('../images/google.svg')}
                  width="21px"
                  height="21px"
                  alt="Facebook"
                />
              </ImageContainer>
              <span>Google</span>
            </Google>
          </ButtonContainer>

          <VisitContainer>
            <h2>ou</h2>
            <VisitButton onClick={() => this.home()}>
              <span>Visitante</span>
            </VisitButton>
          </VisitContainer>
        </Content>

        <Dog source={require('../images/dog-main.png')} />
      </Container>
    );
  }
}
