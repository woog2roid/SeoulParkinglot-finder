import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../../../../contexts/MapOptionContext';
import { Maps } from '../../../../../styles/modal/MapStyle';


const Map = () => {
	const { state } = useContext(ZoomLevelContext);
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
		const center = new window.kakao.maps.LatLng(state.latitude, state.longitude);
		//레벨은 10으로 통일 후, radius만 변화시켜줄 예정
		const mapDrawingOptions = {
			center: center,
			level: 10,
		};
		const KakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);		
		circleOption.center = center;
		circleOption.radius = state.radius;
		new window.kakao.maps.Circle(circleOption).setMap(KakaoMap);
	}, [state]);
	
	return (
		<Maps ref={map} />
	);
};

export default Map;