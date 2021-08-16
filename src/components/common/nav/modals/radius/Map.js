import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../../../../contexts/MapOptionContext';
import { Maps } from '../styles/MapStyle';


const Map = () => {
	const { state } = useContext(ZoomLevelContext);
	const map = useRef(null);

	const circleOptionDefault = {
		strokeWeight: 1, 
		strokeColor: '#007BFF', 
		strokeOpacity: 0.1, 
		strokeStyle: 'solid', 
		fillColor: '#007BFF', 
		fillOpacity: 0.2  
	};
	
	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;
				
				const mapDrawingOptions = {
					center: new window.kakao.maps.LatLng(lat, lng),
					level: 10
				};
				const KakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);
				
				const circleOptionPlus = {
					center: new window.kakao.maps.LatLng(lat, lng),
            		radius: state.radius
				}
				const circleOption = Object.assign(circleOptionDefault, circleOptionPlus);
				new window.kakao.maps.Circle(circleOption).setMap(KakaoMap);
			});
		});
	}, [state]);
	
	return (
		<Maps ref={map} />
	);
};

export default Map;