import { createContext, useState } from 'react';

const MapOptionContext = createContext({
	state: {
		level: 6,
		radius: 8000
	},
	actions:{
		setLevel: () => {},
		setRadius: () => {}
	},
});

export const MapOptionProvider = ({ children }) => {
	const [level, setLevel] = useState(6);
	const [radius, setRadius] = useState(8000);
	
	const value = {
		state: { level, radius },
		actions: { setLevel, setRadius }
	};
	
	return (
		<MapOptionContext.Provider value={value}>
			{children}
		</MapOptionContext.Provider>
	);
};

export const MapOptionConsumer = MapOptionContext.Consumer;

export default MapOptionContext;