import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../contexts/MapOptionContext';
import { Maps } from './Style';

const Map = ({ loading, lat, lng, data }) => {
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
		const center = new window.kakao.maps.LatLng(lat, lng);
		const mapDrawingOptions = {
			center: center,
			level: state.level,
		};
		const KakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);

		circleOption.center = center;
		circleOption.radius = state.radius;
		new window.kakao.maps.Circle(circleOption).setMap(KakaoMap);
		
		console.log(data);
		
		
		//loading이 되고 나면, 마커와 인포윈도우를 표시한다.
		if(loading === false) {
			if(data) {
				let i = 0;
				console.log(data.data.length);
				while(i < data.data.length) {
					const position = new window.kakao.maps.LatLng(data.data[i].LAT, data.data[i].LNG);
					let marker = new window.kakao.maps.Marker({
						position: position,
						map: KakaoMap
					});
					onClickMarker(marker, data.data[i]);
					i = i + 1;
				}
			}
		}

		function onClickMarker(marker, data) {
			window.kakao.maps.event.addListener(marker, 'click', () => {
				console.log(data.PARKING_NAME);
			});
		}
	}, [state, loading]);

	return <Maps ref={map} />;
};

export default Map;