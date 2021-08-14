import React, { useEffect, useRef, useContext } from 'react';
import ZoomLevelContext from '../../../contexts/ZoomLevelContext';
import { MapWrapper } from './MapStyle';

const Map = () => {
	const map = useRef(null);
	const { state } = useContext(ZoomLevelContext);
	
	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
			const lat=position.coords.latitude,
				  lng=position.coords.longitude;
			//37.5,127
			const options = {
				center: new window.kakao.maps.LatLng(lat, lng),
				level: state.level,
			};
				new window.kakao.maps.Map(map.current, options);
			});
		});
	}, [state]);
	

	return (
		<MapWrapper ref={map}/>
	);
};

export default Map;