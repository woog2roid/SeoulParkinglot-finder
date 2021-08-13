import { createContext, useState } from 'react';

const ZoomLevelContext = createContext({
	state: {
		level: 6
	},
	actions:{
		setLevel: () => {}
	},
});

export const ZoomLevelProvider = ({ children }) => {
	const [level, setLevel] = useState(6);
	
	const value = {
		state: { level },
		actions: { setLevel }
	};
	
	return (
		<ZoomLevelContext.Provider value={value}>
			{children}
		</ZoomLevelContext.Provider>
	);
};

export const ZoomLevelConsumer = ZoomLevelContext.Consumer;

export default ZoomLevelContext;