import React from 'react';
import { Container, Header, Content, Footer } from './style';

const CardPerson: React.FC = () => {
  return (
    <Container>
      <Header>
        <span />
      </Header>
      <Content>
        <strong>José Augusto Pasquali Marques</strong>
        <span> teste de dev teste de dev teste de dev teste de dev </span>
      </Content>
      <Footer>
        <button type="submit"> aaa </button>
      </Footer>
    </Container>
  );
};

export default CardPerson;
