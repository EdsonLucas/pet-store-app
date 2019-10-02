import styled from 'styled-components';

export const Accordion = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
  flex: 1;
  padding-left: 15px;
  padding-right: 18px;
  align-items: center;
  margin-right: 2;
  margin-left: 2;
  background: #eee;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  background: 'transparent';

  h2 {
    font-size: 16;
    text-align: left;
    margin-left: 7px;
    color: #686c71;
  }
`;

export const DropdownIndicator = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  width: 10%;
  justify-content: flex-end;
  align-items: center;
`;

export const Panel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  margin-top: -16px;
  margin-bottom: 20px;
  background: transparent;

  p {
    font-size: 15px;
    text-align: center;
    color: #686c71;
  }
`;
