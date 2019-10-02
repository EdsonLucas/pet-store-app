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
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Card = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 1px #d4d4d4;
`;

export const HouseContainer = styled.div`
  width: 27%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a7a7a7;
  border-radius: 15px;

  &.active {
    background: #0bb4f5;
  }
`;

export const House = styled(Image)`
  width: 38px;
  height: 70px;
`;

export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  h3 {
    font-size: 14px;
    color: #707070;
  }

  span {
    color: #a7a7a7;
  }
`;

export const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Selected = styled(Image)`
  width: 26px;
  height: 49px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #ffffff;
`;

export const AddressButton = styled(TouchableOpacity)`
  background: #0bb4f5;
  padding: 10px;
  margin: 20px 40px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  span {
    font-size: 18px;
    color: #ffffff;
  }
`;
