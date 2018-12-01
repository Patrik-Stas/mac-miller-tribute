import React from 'react';
import { hot } from 'react-hot-loader';
import { Container } from 'semantic-ui-react';
import Main from './Main';
import Header from './Header';

const App = () => (
  <div className="App">
    <Container>
      <Header />
      <Main />
    </Container>
  </div>
);

export default hot(module)(App);
