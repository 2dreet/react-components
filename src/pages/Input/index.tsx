import React from 'react';
import { FiAirplay } from 'react-icons/fi';
import Input from '../../components/Input/index';
import { Container } from './style';

const InputPage: React.FC = () => (
  <Container>
    <Input name="nome" icon={FiAirplay} placeholder="Digite o nome" />
  </Container>
);

export default InputPage;
