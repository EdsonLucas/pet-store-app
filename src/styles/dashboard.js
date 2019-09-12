import styled from 'styled-components';

export const Container = styled.div`
  background: #fdc44d;
`;

export const Header = styled.header`
  padding: 24px;
`;

export const Nav = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

export const ContainerLogo = styled.div`
  margin-left: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;
