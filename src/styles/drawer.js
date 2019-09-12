import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 24px;
  height: 100%;
  background: white;
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

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: #521751;
    text-decoration: none;
    font-size: 1.2rem;
  }

  a:hover,
  a:active {
    color: #fa923f;
  }
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
