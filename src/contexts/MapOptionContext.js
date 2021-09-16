import { createContext, useState, useEffect } from 'react';

const MapOptionContext = createContext({
	state: {
		level: 6,
		radius: 8000,
		latitude: 0,
		longitude: 0,
		location: "", 
	},
	actions:{
		setLevel: () => {},
		setRadius: () => {},
		setLatitude: () => {},
		setLongitude: () => {},
		setLocation: () => {},
	},
});

export const MapOptionProvider = ({ children }) => {
	/*상태 목록*/
	//localStorage와 연동한다.
	const [level, setLevel] = useState(localStorage.getItem('level') || 6);
	const [radius, setRadius] = useState(localStorage.getItem('radius') || 8000);
	//처음 앱이 켜질 때, 현재위치를 받아간다.
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude,
			  lng = position.coords.longitude;
			setLatitude(lat);
			setLongitude(lng);
		});
	}, []);
	//location은 center modal에서 "여기로 설정"을 눌러야만 작동함
	const [location, setLocation] = useState();
	
	const value = {
		state: { level, radius, latitude, longitude, location },
		actions: { setLevel, setRadius, setLatitude, setLongitude, setLocation }
	};
	
	return (
		<MapOptionContext.Provider value={value}>
			{children}
		</MapOptionContext.Provider>
	);
};

export const MapOptionConsumer = MapOptionContext.Consumer;

export default MapOptionContext;