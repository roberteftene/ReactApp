import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardPage from './pages/dashboard-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import NotFoundPage from './pages/notfound-page';
import HomePage from './pages/home-page';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;