import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Switch>
		<Route path="/seoul-parking-lot-finder/" component={Main} exact={true}/>
        <Route path="/seoul-parking-lot-finder/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;