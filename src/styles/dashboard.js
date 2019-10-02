import styled from 'styled-components';

import { Image, TouchableOpacity } from 'react-native-web';

export const Container = styled.div`
  background: #ffb901;
`;

export const Header = styled.header`
  padding: 24px;
`;

export const Nav = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const CartButton = styled(TouchableOpacity)``;

export const Cart = styled(Image)`
  width: 34px;
  height: 30px;
`;

export const ToggleButton = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;

  div {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

export const ContainerLogo = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  width: 62px;
  height: 56px;
`;

export const WelcomeContainer = styled.div`
  padding: 10px;
  padding-top: 50px;

  h1 {
    font-size: 40px;
    color: #fff;
    font-weight: 800;
    z-index: 99;
  }
`;

export const Cat = styled.img`
  float: right;
  margin-top: -42%;
  width: 183px;
  height: 200px;
  z-index: 0;
`;

export const Content = styled.div`
  padding: 50px 40px;
  margin-top: -10px;
  border-top-left-radius: 20% 70px;
  border-top-right-radius: 20% 70px;
  background: #ffffff;
  color: #707070;

  h2 {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const SelectDog = styled(Image)`
  width: 30px;
  height: 38px;
`;

export const SelectCat = styled(Image)`
  width: 35px;
  height: 38px;
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 1px #d4d4d4;
`;

export const ProductImage = styled(Image)`
  width: 97px;
  height: 137px;
`;

export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h3 {
    margin-bottom: 20px;
  }
`;

export const ProductButton = styled(TouchableOpacity)`
  background: #0bb4f5;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  span {
    font-size: 18px;
    color: #ffffff;
  }
`;
