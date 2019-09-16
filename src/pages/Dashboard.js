import React, { Component } from 'react';

import {
  Container,
  Header,
  Nav,
  Cart,
  ToggleButton,
  ContainerLogo,
  Logo,
  WelcomeContainer,
  Cat,
  Content,
  SelectDog,
  CardProduct,
  ProductImage,
  RightContainer,
  ProductButton,
} from '../styles/dashboard';

import Drawer from '../components/Drawer';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { DrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ DrawerOpen: false });
  };

  render() {
    const { DrawerOpen } = this.state;
    return (
      <Container>
        <Header>
          <Nav>
            <ToggleButton onClick={this.drawerToggleClickHandler}>
              <div />
              <div />
              <div />
            </ToggleButton>
            <ContainerLogo>
              <Logo source={require('../images/logo.svg')} alt="Pet Store" />
            </ContainerLogo>
            <Cart
              source={require('../images/shopping-cart.svg')}
              alt="Carrinho de Compras"
            />
          </Nav>

          <Drawer
            DrawerOpen={DrawerOpen}
            backdropClickHandler={this.backdropClickHandler}
          />

          <WelcomeContainer>
            <h1>
              Olá, <br />
              Bem-vindo
            </h1>
            <Cat src={require('../images/cat.svg')} alt="Gato" />
          </WelcomeContainer>
        </Header>

        <Content>
          <h2>Rações para</h2>
          <select>
            <option defaultValue>Escolha o animal</option>
            <option value="dog">
              <SelectDog src={require('../images/select-dog.svg')} /> Cachorro
            </option>
            <option value="cat"> Gato</option>
          </select>

          <CardProduct>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
            <RightContainer>
              <h3>Ração para Cães Adulto Carne e Vegetais Pedigree</h3>
              <ProductButton>
                <span>R$ 15,90</span>
              </ProductButton>
            </RightContainer>
          </CardProduct>

          <CardProduct>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
            <RightContainer>
              <h3>Ração para Cães Adulto Carne e Vegetais Pedigree</h3>
              <ProductButton>
                <span>R$ 15,90</span>
              </ProductButton>
            </RightContainer>
          </CardProduct>

          <CardProduct>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
            <RightContainer>
              <h3>Ração para Cães Adulto Carne e Vegetais Pedigree</h3>
              <ProductButton>
                <span>R$ 15,90</span>
              </ProductButton>
            </RightContainer>
          </CardProduct>

          <CardProduct>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
            <RightContainer>
              <h3>Ração para Cães Adulto Carne e Vegetais Pedigree</h3>
              <ProductButton>
                <span>R$ 15,90</span>
              </ProductButton>
            </RightContainer>
          </CardProduct>
        </Content>
      </Container>
    );
  }
}
