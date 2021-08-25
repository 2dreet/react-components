import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.span`
  width: 250px;
  height: 280px;
  border: 2px solid #b7b7b7;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid #444444;
  }

  border-bottom: 2px solid #b7b7b7;
`;
export const Content = styled.div`
  flex: 1;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  overflow: hidden;

  color: #444444;
  strong {
    font-size: 18px;
    display: block;
    font-weight: 500;
  }

  span {
    display: block;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  justify-content: center;
  border-top: 2px solid #b7b7b7;
  width: 100%;

  padding: 16px;

  button {
    background: red;
    border: 0;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, 'red')};
    }
  }
`;
