import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ZoomLevelContext from '../../contexts/MapOptionContext';
import Info from './Info';

const MapContainer = styled.div`
	display: inline-block;
	@media ${(props) => props.theme.mobile} {
		width: 90%;
		height: 360px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		height: 600px;
		margin-bottom: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 60%;
		height: 720px;
		margin-bottom: 20px;
	}
`;

const Map = ({ loading, lat, lng, data, isHidden }) => {
	const map = useRef(null);
	const { mapState } = useContext(ZoomLevelContext);

	const circleOption = {
		strokeWeight: 1,
		strokeColor: '#007BFF',
		strokeOpacity: 0.1,
		strokeStyle: 'solid',
		fillColor: '#007BFF',
		fillOpacity: 0.2,
	};

	useEffect(() => {
		const center = new window.kakao.maps.LatLng(lat, lng);
		const mapDrawingOptions = {
			center: center,
			level: mapState.level,
		};
		const kakaoMap = new window.kakao.maps.Map(map.current, mapDrawingOptions);

		circleOption.center = center;
		circleOption.radius = mapState.radius;
		new window.kakao.maps.Circle(circleOption).setMap(kakaoMap);
		
		//loading이 되고 나면,
		if (loading === false) {
			//빨간 점으로 중앙 표시해주고,
			const centerMarker = new window.kakao.maps.Polyline({
				path: [center],
				strokeWeight: 5,
				strokeColor: 'red',
				strokeOpacity: 0.7,
				strokeStyle: 'solid'
			});
			centerMarker.setMap(kakaoMap);
			
			//서버에서 받은 data로 마커와 인포윈도우를 띄운다.
			if (data) {
				for (let i = 0; i < data.data.length; i = i + 1) {
					if(isHidden === true) {
						if(data.data[i].WEEKDAY_END_TIME === "0000" &&
						   data.data[i].WEEKEND_END_TIME === "0000" &&
						   data.data[i].HOLIDAY_END_TIME === "0000") 
							continue;
					}
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
			let info = Info(data);
			infowindow.setContent(info);
			infowindow.open(kakaoMap, marker);
		};
	}, [mapState, loading, isHidden]);

	return <MapContainer ref={map} />;
};

export default Map;