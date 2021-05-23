import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import { BrowserRouter, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import History from './pages/History';
import Help from './pages/Help';
import './app.scss';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

