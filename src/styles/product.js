import styled from 'styled-components';

import { Image, TouchableOpacity } from 'react-native-web';

export const Container = styled.div`
  background: #ffb901;
`;

export const Content = styled.div`
  padding: 50px 40px;
  margin-top: -10px;
  border-top-left-radius: 20% 70px;
  border-top-right-radius: 20% 70px;
  background: #ffffff;
  color: #707070;

  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

  h1 {
    margin-bottom: 30px;
  }

  h2 {
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled(Image)`
  width: 177px;
  height: 263px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductButton = styled.div`
  width: 45%;
  background: #0bb4f5;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  span {
    font-size: 16px;
    color: #ffffff;
  }
`;

export const QuantityButton = styled.div`
  width: 45%;
  border: 1px solid #707070;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Minus = styled(TouchableOpacity)`
  span {
    font-size: 16px;
    color: #0bb4f5;
  }
`;

export const Plus = styled(TouchableOpacity)`
  span {
    font-size: 16px;
    color: #0bb4f5;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0;
`;

export const Accordion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 50px 0 0 0;

  h3 {
    width: 100%;
    font-size: 18px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #707070;
  }
`;

export const BuyButton = styled(TouchableOpacity)`
  background: #0bb4f5;
  padding: 10px;
  margin: 20px 0px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    color: #ffffff;
    margin-left: 10px;
  }
`;

export const Cart = styled(Image)`
  width: 29px;
  height: 27px;
`;
