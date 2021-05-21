import React from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Main from './form.js';
import './app.scss';
import Nav from './nav/nav'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
