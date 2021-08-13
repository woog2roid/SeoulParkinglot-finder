import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import QuickSearch from './pages/QuickSearch';
import AdvancedSearch from './pages/AdvancedSearch';
import { Wrapper } from './global_styles/utils/ApplicationStyle';
import { ZoomLevelProvider } from './contexts/ZoomLevelContext';

const App = () => {
	return (
		<Wrapper>
			<ZoomLevelProvider>
				<Switch>
					<Route path="/seoul-parking-lot-finder/" component={Main} exact={true} />
					<Route path="/seoul-parking-lot-finder/about/" component={About} />
					<Route path="/seoul-parking-lot-finder/search/quick" component={QuickSearch} />
					<Route path="/seoul-parking-lot-finder/search/advanced" component={AdvancedSearch} />
					<Route component={NotFound} />
				</Switch>
			</ZoomLevelProvider>
		</Wrapper>
	);
};

export default App;