import styled from 'styled-components';

import { Image } from 'react-native-web';

export const Container = styled.div`
  background: #ffb901;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 0.9;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    text-align: center;
    padding: 30px 50px;
    font-size: 20px;
    color: #ffffff;
  }

  p {
    padding-top: 0;
  }
`;

export const Logo = styled(Image)`
  width: 136px;
  height: 172px;
`;
