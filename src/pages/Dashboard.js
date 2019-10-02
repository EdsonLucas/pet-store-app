import React, { Component } from 'react';

import {
  Container,
  Header,
  Nav,
  CartButton,
  Cart,
  ToggleButton,
  ContainerLogo,
  Logo,
  WelcomeContainer,
  Cat,
  Content,
  SelectDog,
  SelectCat,
  CardProduct,
  ProductImage,
  RightContainer,
  ProductButton,
} from '../styles/dashboard';

import Drawer from '../components/Drawer';
import SelectButton from '../components/SelectButton';

const pets = [
  {
    value: 'cachorro',
    label: (
      <>
        <SelectDog source={require('../images/select-dog.svg')} />
        &nbsp; Cachorro
      </>
    ),
  },
  {
    value: 'gato',
    label: (
      <>
        <SelectCat source={require('../images/select-cat.svg')} />
        &nbsp; Gato
      </>
    ),
  },
];

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

  cart = () => {
    window.location.href = '/cart';
  };

  product = () => {
    window.location.href = '/product';
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
            <CartButton onClick={() => this.cart()}>
              <Cart
                source={require('../images/shopping-cart.svg')}
                alt="Carrinho de Compras"
              />
            </CartButton>
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
          <SelectButton options={pets} placeholder="Escolha o animal" />

          <CardProduct>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
            <RightContainer>
              <h3>Ração para Cães Adulto Carne e Vegetais Pedigree</h3>
              <ProductButton onClick={() => this.product()}>
                <span>R$ 15.90</span>
              </ProductButton>
            </RightContainer>
          </CardProduct>
        </Content>
      </Container>
    );
  }
}
