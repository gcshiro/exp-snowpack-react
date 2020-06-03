import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import * as Pages from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Pages.Home.Main} />
        <Route exact path="*" component={Pages.NotFound.Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
