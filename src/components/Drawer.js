import React from 'react';

import {
  BackDrop,
  Nav,
  UserContainer,
  RightContainer,
  LoginButton,
  Content,
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Assinatura</a>
            </li>

            <hr />

            <li>
              <a href="/">Endereços</a>
            </li>
            <li>
              <a href="/">Meus Pedidos</a>
            </li>
            <li>
              <a href="/">Carrinho</a>
            </li>

            <hr />

            <li>
              <a href="/">Sobre a Pet Store</a>
            </li>
          </ul>
        </Content>
      </Nav>
      {DrawerOpen && <BackDrop onClick={backdropClickHandler} />}
    </>
  );
};

export default SideDrawer;
