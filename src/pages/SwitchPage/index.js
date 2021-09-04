import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Detail from '../../pages/Detail';

const SwitchPage = () => {

  return (
      <Switch>
        <Route exact path="/"> <Home/></Route>
        <Route exact path="/detail/:id"> <Detail/></Route>
      </Switch>
  );
}

export default SwitchPage;