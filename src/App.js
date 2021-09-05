import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { Wrapper } from './styles/AppStyle';
import GlobalStyle from './styles/GlobalStyle';
import MapOptionContext, { MapOptionProvider } from './contexts/MapOptionContext';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';

const App = () => {
	const { actions, state } = useContext(MapOptionContext);
	
	//localStorage에서 Opiton 연동
	useEffect(() => {
		if(localStorage.getItem('level')) {
			actions.setLevel(localStorage.getItem('level'));
	}
		if(localStorage.getItem('radius')) {
			actions.setRadius(localStorage.getItem('radius'));
		}
	}, []);
	
	return (
		<Wrapper>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
			<MapOptionProvider>
				<Switch>
					<Route path="/seoul-parking-lot-finder/" component={Main} exact={true} />
					<Route path="/seoul-parking-lot-finder/about/" component={About} />
					<Route path="/seoul-parking-lot-finder/search/" component={Search} />
					<Route component={NotFound} />
				</Switch>
			</MapOptionProvider>
			</ThemeProvider>
		</Wrapper>
	);
};

export default App;