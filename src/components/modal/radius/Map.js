import React, { useContext, useRef, useEffect } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { MapContainer } from '../styles/MapStyle';

/*
	::레벨은 10으로 통일 후, state.radius로만 변화시켜줌 ::
*/

const Map = () => {
	const { mapState } = useContext(MapOptionContext);
	const map = useRef(null);

	//원을 그리는 기본 옵션
	const circleOption = {
		strokeWeight: 1, 
		strokeColor: '#007BFF', 
		strokeOpacity: 0.1, 
		strokeStyle: 'solid', 
		fillColor: '#007BFF', 
		fillOpacity: 0.2  
	};
	
	useEffect(() => {
		const center = new window.kakao.maps.LatLng(mapState.latitude, mapState.longitude);
		const mapDrawingOptions = {
			center: center,
			level: 8,
		};
		const kakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);		
		circleOption.center = center;
		circleOption.radius = mapState.radius;
		new window.kakao.maps.Circle(circleOption).setMap(kakaoMap);
	}, [mapState]);
	
	return (
		<MapContainer ref={map} />
	);
};

export default Map;