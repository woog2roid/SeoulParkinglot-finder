import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../contexts/MapOptionContext';
import { Maps } from './Style';

const Map = () => {
	const { state } = useContext(ZoomLevelContext);
	const map = useRef(null);

	const circleOption = {
		strokeWeight: 1,
		strokeColor: '#007BFF',
		strokeOpacity: 0.1,
		strokeStyle: 'solid',
		fillColor: '#007BFF',
		fillOpacity: 0.1,
	};

	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;
				const center = new window.kakao.maps.LatLng(lat, lng);

				const mapDrawingOptions = {
					center: center,
					level: state.level,
				};
				const KakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);
				
				circleOption.center = center;
				circleOption.radius = state.radius;
				new window.kakao.maps.Circle(circleOption).setMap(KakaoMap);
			});
		});
	}, [state]);

	return <Maps ref={map} />;
};

export default Map;
