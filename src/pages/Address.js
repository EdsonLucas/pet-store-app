import React, { Component } from 'react';

import {
  Container,
  Content,
  CardList,
  Card,
  HouseContainer,
  House,
  RightContainer,
  SelectedContainer,
  Selected,
  ButtonContainer,
  AddressButton,
} from '../styles/address';

import BackHeader from '../components/BackHeader';

const options = [
  {
    key: 1,
    title: 'Rua Vicente Santório Fantini, 80',
    text: 'Campo Grande, Cariacica',
  },
  {
    key: 2,
    title: 'Rua Presidente Lima, 312',
    text: 'Centro, Vila Velha',
  },
];

export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      checked: 1,
    };
  }

  newAddress = () => {
    window.location.href = '/new-address';
  };

  render() {
    const { isEmpty, checked } = this.state;

    return (
      <Container>
        <BackHeader path="/" />

        <Content>
          <h1>
            Meus <br /> Endereços
          </h1>

          <CardList>
            {isEmpty ? (
              <h2 style={{ color: '#A7A7A7' }}>
                Você não possui nenhum endereço cadastrado :(
              </h2>
            ) : (
              <>
                {options.map(item => (
                  <Card
                    key={item.key}
                    onPress={() => this.setState({ checked: item.key })}
                  >
                    <HouseContainer
                      className={`${checked === item.key && 'active'}`}
                    >
                      <House
                        source={require('../images/house.svg')}
                        alt="Meu endereço"
                      />
                    </HouseContainer>
                    <RightContainer>
                      <h3>{item.title}</h3>
                      <span>{item.text}</span>
                    </RightContainer>
                    {checked === item.key && (
                      <SelectedContainer>
                        <Selected
                          source={require('../images/selected.svg')}
                          alt="Endereço selecionado"
                        />
                      </SelectedContainer>
                    )}
                  </Card>
                ))}
              </>
            )}
          </CardList>
        </Content>

        <ButtonContainer>
          <AddressButton onClick={() => this.newAddress()}>
            <span>Adicionar Novo Endereço</span>
          </AddressButton>
        </ButtonContainer>
      </Container>
    );
  }
}
