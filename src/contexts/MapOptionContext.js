import { createContext, useState, useEffect } from 'react';

const MapOptionContext = createContext({
	state: {
		level: 6,
		radius: 8000,
		latitude: 0,
		longitude: 0
	},
	actions:{
		setLevel: () => {},
		setRadius: () => {},
		setLatitude: () => {},
		setLongitude: () => {}
	},
});

export const MapOptionProvider = ({ children }) => {
	/*상태 목록*/
	//localStorage와 연동한다.
	const [level, setLevel] = useState(localStorage.getItem('level') || 6);
	const [radius, setRadius] = useState(localStorage.getItem('radius') || 8000);
	//처음 앱이 켜질 때, 현재위치를 받아간다.
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude,
			  lng = position.coords.longitude;
			setLatitude(lat);
			setLongitude(lng);
		});
	}, []);
	
	const value = {
		state: { level, radius, latitude, longitude },
		actions: { setLevel, setRadius, setLatitude, setLongitude }
	};
	
	return (
		<MapOptionContext.Provider value={value}>
			{children}
		</MapOptionContext.Provider>
	);
};

export const MapOptionConsumer = MapOptionContext.Consumer;

export default MapOptionContext;