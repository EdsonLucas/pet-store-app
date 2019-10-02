import React from 'react';

import { Header, BackButton, ArrowLeft } from '../styles/backheader';

const BackHeader = props => {
  const { path } = props;

  const back = pathway => {
    window.location.href = pathway;
  };

  return (
    <Header>
      <BackButton onClick={() => back(path)}>
        <ArrowLeft source={require('../images/arrow-left.svg')} alt="Voltar" />
      </BackButton>
    </Header>
  );
};

export default BackHeader;
