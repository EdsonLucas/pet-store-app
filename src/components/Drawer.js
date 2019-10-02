import React from 'react';

import {
  BackDrop,
  Nav,
  UserContainer,
  RightContainer,
  LoginButton,
  Content,
  ContainerImage,
  Home,
  Signature,
  Address,
  Requests,
  Cart,
  PetStore,
} from '../styles/drawer';

import defaultprofile from '../images/default-profile.svg';

const state = {
  isLogged: false,
};

const SideDrawer = props => {
  const { DrawerOpen, backdropClickHandler } = props;

  return (
    <>
      <Nav className={DrawerOpen && 'open'}>
        <UserContainer>
          {state.isLogged ? (
            <>
              <img src={defaultprofile} alt="Ana Júlia" />
              <RightContainer>
                <h3>Ana Júlia</h3>
                <span>ana.julia@gmail.com</span>
              </RightContainer>
            </>
          ) : (
            <LoginButton>
              <h3>Entre ou Cadastre-se</h3>
            </LoginButton>
          )}
        </UserContainer>
        <Content>
          <ul>
            <li>
              <ContainerImage>
                <Home source={require('../images/home.svg')} alt="Home" />
              </ContainerImage>
              <button onClick={backdropClickHandler}>Home</button>
            </li>
            <li>
              <ContainerImage>
                <Signature
                  source={require('../images/signature.svg')}
                  alt="Assinatura"
                />
              </ContainerImage>
              <a href="/signature">Assinatura</a>
            </li>
            <hr />
            <li>
              <ContainerImage>
                <Address
                  source={require('../images/map.svg')}
                  alt="Meus Endereços"
                />
              </ContainerImage>
              <a href="/address">Endereços</a>
            </li>
            <li>
              <ContainerImage>
                <Requests
                  source={require('../images/truck.svg')}
                  alt="Meus Pedidos"
                />
              </ContainerImage>
              <a href="/shopping-history">Meus Pedidos</a>
            </li>
            <li>
              <ContainerImage>
                <Cart source={require('../images/cart-2.svg')} alt="Carrinho" />
              </ContainerImage>
              <a href="/cart">Carrinho</a>
            </li>
            <hr />
            <li>
              <ContainerImage>
                <PetStore
                  source={require('../images/logo-2.svg')}
                  alt="Pet Store"
                />
              </ContainerImage>
              <a href="/about">Sobre a Pet Store</a>
            </li>
          </ul>
        </Content>
      </Nav>
      {DrawerOpen && <BackDrop onClick={backdropClickHandler} />}
    </>
  );
};

export default SideDrawer;
