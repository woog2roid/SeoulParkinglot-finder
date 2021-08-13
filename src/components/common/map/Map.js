import React, { useEffect, useRef, useContext } from 'react';
import ZoomLevelContext from '../../../contexts/ZoomLevelContext';

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
		<div ref={map} style={{ width: '300px', height: '300px'}}/>
	);
};

export default Map;