import styled from 'styled-components';

import { Image, TouchableOpacity } from 'react-native-web';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .food {
    width: 120px;
    height: 131px;
    position: absolute;
    left: -5px;
    top: 60px;
  }

  .food2 {
    width: 120px;
    height: 161px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45%;
  z-index: 9;

  h1 {
    font-size: 20px;
    color: #707070;
    margin-bottom: 10px;
  }
`;

export const Logo = styled(Image)`
  width: 136px;
  height: 172px;
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 14px;
    color: #a7a7a7;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Facebook = styled(TouchableOpacity)`
  background: #0172b1;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;

  span {
    font-size: 18px;
    margin-left: 10px;
    color: #ffffff;
  }
`;

export const Google = styled(TouchableOpacity)`
  background: #ffffff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 3px 8px 1px #d4d4d4;

  span {
    font-size: 18px;
    margin-left: 10px;
    color: #a7a7a7;
  }
`;

export const VisitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const VisitButton = styled(TouchableOpacity)`
  width: 100%;
  background: #0bb4f5;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    font-size: 18px;
    margin-left: 10px;
    color: #ffffff;
  }
`;

export const Dog = styled(Image)`
  width: 375px;
  height: 156px;
`;
