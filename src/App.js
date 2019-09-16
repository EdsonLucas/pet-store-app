import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native-web';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <SafeAreaView>
    <StatusBar backgroundColor="#FFB901" barStyle="ligh-content" />
    <Routes />
    <GlobalStyle />
  </SafeAreaView>
);

export default App;
