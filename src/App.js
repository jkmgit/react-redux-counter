import React from 'react';
import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Counter/>
      <Form/>
    </React.Fragment>
  );
}

export default App;
