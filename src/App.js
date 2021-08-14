import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { Wrapper } from './global_styles/utils/ApplicationStyle';
import { ZoomLevelProvider } from './contexts/ZoomLevelContext';

const App = () => {
	return (
		<Wrapper>
			<ZoomLevelProvider>
				<Switch>
					<Route path="/seoul-parking-lot-finder/" component={Main} exact={true} />
					<Route path="/seoul-parking-lot-finder/about/" component={About} />
					<Route path="/seoul-parking-lot-finder/search" component={Search} />
					<Route component={NotFound} />
				</Switch>
			</ZoomLevelProvider>
		</Wrapper>
	);
};

export default App;