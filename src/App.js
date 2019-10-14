import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store';
import Sidebar from './components/Sidebar';
import TeamsPage from './components/TeamsPage';
import ConferencesPage from './components/ConferencesPage';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename="/college-football">
      <Container className="p-3">
      <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <Switch>
          <Route path="/teams" component={TeamsPage} />
          <Route path="/conferences" component={ConferencesPage} />

          <Route exact path="/" render={() => (
            <Redirect to="/teams"/>
          )}/>
          </Switch>
        </div>
      </div>
      </Container>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
