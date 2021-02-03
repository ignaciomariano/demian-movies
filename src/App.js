import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from './context/'
import './App.scss';
import SwitchPage from './pages/SwitchPage';

function App() {
  return (
    <ContextProvider>
      <Router>
        <SwitchPage />
      </Router>
    </ContextProvider>
  );
}

export default App;
