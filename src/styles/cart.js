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
    margin-bottom: 20px;
  }
`;

export const Card = styled.div`
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

export const CardProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 1px #d4d4d4;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  &.buttons {
    margin-top: 20px;
    justify-content: space-between;
  }

  &.resume {
    align-items: center;
    justify-content: flex-start;

    p.key {
      width: 50%;
      font-size: 17px;
      color: #707070;
    }

    h5.key {
      width: 50%;
      font-size: 20px;
      color: #707070;
    }

    p.value {
      width: 50%;
      font-size: 19px;
      color: #a7a7a7;
    }

    h5.value {
      width: 50%;
      font-size: 29px;
      color: #0bb4f5;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled(Image)`
  width: 56px;
  height: 85px;
`;

export const DescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;

  h3 {
    font-size: 14px;
    color: #707070;
  }

  span {
    color: #a7a7a7;
  }
`;

export const ProductButton = styled.div`
  width: 40%;
  padding: 8px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  margin-left: 3px;

  span {
    font-size: 16px;
    color: #0bb4f5;
  }
`;

export const QuantityButton = styled.div`
  width: 50%;
  border: 1px solid #707070;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Minus = styled(TouchableOpacity)`
  span {
    font-size: 14px;
    color: #0bb4f5;
  }
`;

export const Plus = styled(TouchableOpacity)`
  span {
    font-size: 14px;
    color: #0bb4f5;
  }
`;

export const RemoveButton = styled(TouchableOpacity)`
  margin-left: 9%;
`;

export const Remove = styled(Image)`
  width: 18px;
  height: 22px;
`;

export const CardResume = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 1px #d4d4d4;
`;

export const FinishButton = styled(TouchableOpacity)`
  background: #0bb4f5;
  padding: 10px;
  margin: 20px 0;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  span {
    font-size: 18px;
    color: #ffffff;
  }
`;
