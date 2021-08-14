import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { Wrapper } from './global_styles/utils/ApplicationStyle';
import { MapOptionProvider } from './contexts/MapOptionContext';

const App = () => {
	return (
		<Wrapper>
			<MapOptionProvider>
				<Switch>
					<Route path="/seoul-parking-lot-finder/" component={Main} exact={true} />
					<Route path="/seoul-parking-lot-finder/about/" component={About} />
					<Route path="/seoul-parking-lot-finder/search" component={Search} />
					<Route component={NotFound} />
				</Switch>
			</MapOptionProvider>
		</Wrapper>
	);
};

export default App;