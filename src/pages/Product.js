import React, { Component } from 'react';

import {
  Container,
  Content,
  ContainerImage,
  ProductImage,
  ButtonContainer,
  ProductButton,
  QuantityButton,
  Minus,
  Plus,
  DescriptionContainer,
  BuyButton,
  Cart,
} from '../styles/product';

import BackHeader from '../components/BackHeader';
import Collapse from '../components/Collapse';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  add = () => {
    let { quantity } = this.state;

    quantity += 1;

    this.setState({
      quantity,
    });
  };

  remove = () => {
    let { quantity } = this.state;

    quantity = quantity > 1 ? quantity - 1 : quantity;

    this.setState({
      quantity,
    });
  };

  cart = () => {
    window.location.href = '/cart';
  };

  render() {
    const { quantity } = this.state;

    return (
      <Container>
        <BackHeader path="/" />

        <Content>
          <h2>Ração para Cães Adulto Carne e Vegetais Pedigree</h2>

          <ContainerImage>
            <ProductImage source={require('../images/racao.svg')} alt="Ração" />
          </ContainerImage>

          <ButtonContainer>
            <ProductButton>
              <span>R$15.90</span>
            </ProductButton>
            <QuantityButton>
              <Minus onClick={() => this.remove()}>
                <span>-</span>
              </Minus>
              <span>{quantity}</span>
              <Plus onClick={() => this.add()}>
                <span>+</span>
              </Plus>
            </QuantityButton>
          </ButtonContainer>

          <DescriptionContainer>
            <Collapse
              title="Especificações"
              description="This is the collapsible content. It can be any element or React
              component you like."
            />
            <Collapse
              title="Detalhes"
              description="This is the collapsible content. It can be any element or React
              component you like."
            />
          </DescriptionContainer>

          <BuyButton onClick={() => this.cart()}>
            <Cart
              source={require('../images/shopping-cart.svg')}
              alt="Carrinho de Compras"
            />
            <span> Comprar agora </span>
          </BuyButton>
        </Content>
      </Container>
    );
  }
}
