import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../contexts/MapOptionContext';
import { LoadingWrapper, LoadingMaps, Maps, Progress } from './Style';


const Map = ({ loading }) => {
	const map = useRef(null);
	const { state } = useContext(ZoomLevelContext);
	const circleOption = {
		strokeWeight: 1,
		strokeColor: '#007BFF',
		strokeOpacity: 0.1,
		strokeStyle: 'solid',
		fillColor: '#007BFF',
		fillOpacity: 0.1,
	};

	useEffect(() => {
		const center = new window.kakao.maps.LatLng(state.latitude, state.longitude);
		const mapDrawingOptions = {
			center: center,
			level: state.level,
		};
		const KakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);
			
		circleOption.center = center;
		circleOption.radius = state.radius;
		new window.kakao.maps.Circle(circleOption).setMap(KakaoMap);
	}, [state, loading]);

	if(loading) {
		return (
			<LoadingWrapper>
				<Progress color="primary" />
				<LoadingMaps ref={map} />
			</LoadingWrapper>
		);
	}
	else {
		return <Maps ref={map} />;
	}
};

export default Map;
