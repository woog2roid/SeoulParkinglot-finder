import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound'

const Wrapper = styled.div`
	@media all and (max-width:767px) {
    	margin-left: 0%;
		margin-right: 0%;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-left: 8%;
		margin-right: 8%;
    }
    @media all and (min-width:1081px) {
        margin-left: 15%;
		margin-right: 15%;
    }
`;

const App = () => {
  return (
    <Wrapper>
      <Switch>
		<Route path="/seoul-parking-lot-finder/" component={Main} exact={true}/>
        <Route path="/seoul-parking-lot-finder/about/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

export default App;