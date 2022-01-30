import React from 'react';
import { Route, Switch } from 'react-router-dom';
//pages
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
//global settings, state etc...
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import { MapOptionProvider } from './contexts/MapOptionContext';
import { SearchOptionProvider } from './contexts/SearchOptionContext';
import { ThemeProvider } from 'styled-components';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
			<MapOptionProvider>
			<SearchOptionProvider>
				<Switch>
					<Route path="/" component={Main} exact={true} />
					<Route path="/about/" component={About} />
					<Route path="/search/" component={Search} />
					<Route component={NotFound} />
				</Switch>
			</SearchOptionProvider>
			</MapOptionProvider>
			</ThemeProvider>
		</>
	);
};

export default App;