import styled from 'styled-components';

import { Image, TouchableOpacity } from 'react-native-web';

export const Nav = styled.nav`
  height: 100%;
  background: #ffb901;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  &.open {
    transform: translateX(0);
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;

  img {
    width: 69px;
    height: 69px;
  }
`;

export const RightContainer = styled.div`
  width: 90%;

  h3,
  span {
    color: #ffffff;
  }
`;

export const LoginButton = styled(TouchableOpacity)`
  padding: 10px;
  border-radius: 20px;

  h3 {
    color: #ffffff;
  }
`;

export const Content = styled.div`
  height: 100%;
  background: #ffffff;
  padding: 20px 40px;
  margin-top: -10px;
  border-top-left-radius: 20% 45px;
  border-top-right-radius: 20% 45px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    margin: 0.9rem 0;
    display: flex;
    flex-direction: row;
  }

  a,
  button {
    font-size: 18px;
    font-weight: 700;
    color: #707070;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 10px;
  }

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
  }

  hr {
    margin: 1rem 0;
  }
`;

export const ContainerImage = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = styled(Image)`
  width: 22px;
  height: 22px;
`;

export const Signature = styled(Image)`
  width: 23px;
  height: 25px;
`;

export const Address = styled(Image)`
  width: 17px;
  height: 25px;
`;

export const Requests = styled(Image)`
  width: 30px;
  height: 20px;
`;

export const Cart = styled(Image)`
  width: 23px;
  height: 20px;
`;

export const PetStore = styled(Image)`
  width: 30px;
  height: 28px;
`;

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
