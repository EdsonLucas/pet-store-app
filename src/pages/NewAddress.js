import React, { Component } from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native-web';

import {
  Container,
  Content,
  InputContainer,
  Input,
  AddressButton,
} from '../styles/newaddress';

import BackHeader from '../components/BackHeader';

export default class NewAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
    };
  }

  render() {
    const { cep, street, number, neighborhood, city } = this.state;

    return (
      <Container>
        <BackHeader path="/address" />

        <Content>
          <h1>
            Novo <br /> Endereço
          </h1>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{
              flex: 1,
            }} /* keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} */
          >
            <InputContainer>
              <span>CEP</span>
              <Input
                maxLength={8}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => this.street.focus()}
                value={cep}
                onChangeText={text => {
                  this.setState({
                    cep: text.trim(),
                  });
                }}
              />
            </InputContainer>

            <InputContainer>
              <span>Rua</span>
              <Input
                ref={ref => (this.street = ref)}
                returnKeyType="next"
                onSubmitEditing={() => this.number.focus()}
                value={street}
                onChangeText={text => {
                  this.setState({
                    street: text,
                  });
                }}
              />
            </InputContainer>

            <InputContainer>
              <span>Número</span>
              <Input
                ref={ref => (this.number = ref)}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => this.neighborhood.focus()}
                value={number}
                onChangeText={text => {
                  this.setState({
                    number: text.trim(),
                  });
                }}
              />
            </InputContainer>

            <InputContainer>
              <span>Bairro</span>
              <Input
                ref={ref => (this.neighborhood = ref)}
                returnKeyType="next"
                onSubmitEditing={() => this.city.focus()}
                value={neighborhood}
                onChangeText={text => {
                  this.setState({
                    neighborhood: text,
                  });
                }}
              />
            </InputContainer>

            <InputContainer>
              <span>Cidade</span>
              <Input
                ref={ref => (this.city = ref)}
                returnKeyType="done"
                onSubmitEditing={() => {}}
                value={city}
                onChangeText={text => {
                  this.setState({
                    city: text,
                  });
                }}
              />
            </InputContainer>
          </KeyboardAvoidingView>

          <AddressButton>
            <span>Adicionar</span>
          </AddressButton>
        </Content>
      </Container>
    );
  }
}
