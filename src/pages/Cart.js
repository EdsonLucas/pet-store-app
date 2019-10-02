import React, { Component } from 'react';

import {
  Container,
  Content,
  Card,
  HouseContainer,
  House,
  RightContainer,
  SelectedContainer,
  Selected,
  CardProduct,
  Row,
  Column,
  ProductImage,
  DescriptionContainer,
  ProductButton,
  QuantityButton,
  Minus,
  Plus,
  RemoveButton,
  Remove,
  CardResume,
  FinishButton,
} from '../styles/cart';

import BackHeader from '../components/BackHeader';
import SelectButton from '../components/SelectButton';

const product = [
  {
    key: 1,
    title: 'Ração para Cães Adulto Carne e Vegetais Pedigree',
    value: 15.9,
  },
];

const pagamento = [
  {
    value: 'dinheiro',
    label: 'Dinheiro',
  },
  {
    value: 'picpay',
    label: 'PicPay',
  },
];

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      isEmpty: false,
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

  delete = index => {
    const removeIndex = product.map(item => item.key).indexOf(index);

    product.splice(removeIndex, 1);

    product.length > 0
      ? this.setState({ isEmpty: false })
      : this.setState({ isEmpty: true });
  };

  render() {
    const { isEmpty, quantity } = this.state;

    return (
      <Container>
        <BackHeader path="/" />

        <Content>
          <h1>Carrinho</h1>

          <h2>Entregar em</h2>
          <Card>
            <HouseContainer className="active">
              <House
                source={require('../images/house.svg')}
                alt="Meu endereço"
              />
            </HouseContainer>
            <RightContainer>
              <h3>Rua Vicente Santório Fantini, 80</h3>
              <span>Campo Grande, Cariacica</span>
            </RightContainer>
            <SelectedContainer>
              <Selected
                source={require('../images/selected.svg')}
                alt="Endereço selecionado"
              />
            </SelectedContainer>
          </Card>

          <h2>Produtos</h2>
          {isEmpty ? (
            <h2 style={{ color: '#A7A7A7' }}>O carrinho está vazio :(</h2>
          ) : (
            <>
              {product.map(item => (
                <CardProduct key={item.key}>
                  <ProductImage
                    source={require('../images/racao.svg')}
                    alt="Ração"
                  />
                  <Column>
                    <Row>
                      <DescriptionContainer>
                        <h3>{item.title}</h3>
                      </DescriptionContainer>
                      <RemoveButton onClick={() => this.delete(item.key)}>
                        <Remove
                          source={require('../images/delete.svg')}
                          alt="Remover Produto"
                        />
                      </RemoveButton>
                    </Row>
                    <Row className="buttons">
                      <ProductButton>
                        <span>R${item.value}</span>
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
                    </Row>
                  </Column>
                </CardProduct>
              ))}
            </>
          )}

          <h2>Forma de Pagamento</h2>
          <SelectButton
            options={pagamento}
            placeholder="Pagamento na Entrega"
          />

          <h2 style={{ marginTop: 20 }}>Resumo</h2>
          <CardResume>
            <Row className="resume">
              <p className="key">Total</p>
              <p className="value">R$15.90 </p>
            </Row>
            <Row className="resume">
              <p className="key">Frete</p>
              <p className="value">Gratuito</p>
            </Row>
            <Row className="resume">
              <h5 className="key">Valor Total</h5>
              <h5 className="value">R$15.90</h5>
            </Row>
          </CardResume>

          <FinishButton>
            <span>Finalizar Compra</span>
          </FinishButton>
        </Content>
      </Container>
    );
  }
}
