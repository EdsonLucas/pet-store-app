import styled from 'styled-components';
import { TouchableOpacity, TextInput } from 'react-native-web';

export const Container = styled.div`
  height: 100%;
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

  h1 {
    margin-bottom: 30px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 40px;

  span {
    color: #a7a7a7;
  }
`;

export const Input = styled(TextInput)`
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #a0a0a0;
`;

export const AddressButton = styled(TouchableOpacity)`
  background: #0bb4f5;
  padding: 10px;
  margin: 20px 0px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;

  span {
    font-size: 18px;
    color: #ffffff;
  }
`;
