import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './form.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
