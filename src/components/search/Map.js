import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../contexts/MapOptionContext';
import { Maps } from './Style';
import Info from './Info';

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
		const kakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);

		circleOption.center = center;
		circleOption.radius = state.radius;
		new window.kakao.maps.Circle(circleOption).setMap(kakaoMap);

		
		//loading이 되고 나면, 서버에서 받은 data로 마커와 인포윈도우를 띄운다.
		if (loading === false) {
			if (data) {
				for (let i = 0; i < data.data.length; i = i + 1) {
					//마커 생성 및 이벤트(Infowindow) 등록
					const marker = displayMarker(data.data[i]);
					onClickMarker(marker, data.data[i]);
				}
			}
		}
		
		//Marker, Infowindow 함수
		function displayMarker(data) {
			return new window.kakao.maps.Marker({
				map: kakaoMap,
				position: new window.kakao.maps.LatLng(data.LAT[0], data.LNG[0]),
			});
		};
		function onClickMarker(marker, data) {
			window.kakao.maps.event.addListener(marker, 'click', () => {
				displayInfowindow(marker, data);
			});
		};
		const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1, removable: true });
		function displayInfowindow(marker, data) {
			infowindow.close();
			let info = Info(data);
			infowindow.setContent(info);
			infowindow.open(kakaoMap, marker);
		};
	}, [state, loading]);

	return <Maps ref={map} />;
};

export default Map;