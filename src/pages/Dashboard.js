import React, { Component } from 'react';

import {
  Container,
  Header,
  Nav,
  ToggleButton,
  ContainerLogo,
} from '../styles/dashboard';

import Drawer from '../components/Drawer';

export default class Dashboard extends Component {
  state = {
    DrawerOpen: false,
  };

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
              <a href="/">THE LOGO</a>
            </ContainerLogo>
          </Nav>

          <Drawer
            DrawerOpen={DrawerOpen}
            backdropClickHandler={this.backdropClickHandler}
          />
        </Header>
      </Container>
    );
  }
}
