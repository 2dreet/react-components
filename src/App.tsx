import React from 'react';
import CardPage from './pages/card';
import InputPage from './pages/Input/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <CardPage />
      <GlobalStyle />
    </>
  );
};

export default App;
