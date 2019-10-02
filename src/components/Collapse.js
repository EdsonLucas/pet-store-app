import React, { Component } from 'react';

import {
  Accordion,
  TitleContainer,
  DropdownIndicator,
  Panel,
} from '../styles/collapse';

export default class Cobertura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => {
    const { expanded } = this.state;

    this.setState({
      expanded: !expanded,
    });
  };

  render() {
    const { expanded } = this.state;
    const { title, description } = this.props;

    return (
      <>
        <Accordion onClick={() => this.toggleExpand()}>
          <TitleContainer>
            <h2>{title}</h2>
          </TitleContainer>
          <DropdownIndicator>
            <img
              style={
                expanded
                  ? {
                      transform: 'rotate(180deg)',
                      transition: 'all 0.2s ease',
                    }
                  : {
                      transition: 'all 0.2s ease',
                    }
              }
              src={require('../images/arrow-down.svg')}
              width="16px"
              height="17px"
              alt="Escolha"
            />
          </DropdownIndicator>
        </Accordion>
        {expanded && (
          <Panel>
            <p>{description}</p>
          </Panel>
        )}
      </>
    );
  }
}
