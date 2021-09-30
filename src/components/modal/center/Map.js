import React, { useContext, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { MapContainer } from '../styles/MapStyle';
import Info from './Info';

/*
	::레벨은 state로 맞추고, 검색해서 마커 띄우고, 인포윈도우에서 선택까지::
*/


const Input = styled.input`
	border: 2px solid ${(props) => props.theme.primary};

	@media ${(props) => props.theme.mobile} {
		width: 280px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 500px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 600px;
		margin-bottom: 10px;
	}

	&:focus {
		outline: none;
	}
`;

const Map = ({ setCenterConditionTrue, openLocationPopover, toggleModal }) => {
	const { mapState, mapActions } = useContext(MapOptionContext);
	const map = useRef(null);

	const [keyword, setKeyword] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		setKeyword(e.target.input.value);
	};

	//맵을 생성하고[1], 결과값(keyword)이 변할때마다[2] 리렌더링을 해주어야함
	useEffect(() => {
		const options = {
			center: new window.kakao.maps.LatLng(mapState.latitude, mapState.longitude),
			level: mapState.level,
		};
		const kakaoMap = new window.kakao.maps.Map(map.current, options);
		
		//submit을 통해 받은 keyword로 검색
		const placeSearch = new window.kakao.maps.services.Places();
		//keywordSearch의 callback으로
		//1.marker를 표시하고,
		//2.Map의 bound를 설정하며,
		//3.marker를 클릭했을 때의 event를 모두 관리
		placeSearch.keywordSearch(keyword, placesSearchCB);

		/*placesSearchCB chain functions...*/
		function placesSearchCB(data, status) {
			if (status === window.kakao.maps.services.Status.OK) {
				let bounds = new window.kakao.maps.LatLngBounds();
				for (let i = 0; i < data.length; i++) {
					let marker = displayMarker(data[i]);
					onClickMarker(marker, data[i]);
					bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
				}
				kakaoMap.setBounds(bounds);
			}
		}
		function displayMarker(place) {
			return new window.kakao.maps.Marker({
				map: kakaoMap,
				position: new window.kakao.maps.LatLng(place.y, place.x),
			});
		}
		function onClickMarker(marker,data) {
			window.kakao.maps.event.addListener(marker, 'click', () => {
				displayInfowindow(marker, data);
			});
		}
		const infowindow = new window.kakao.maps.InfoWindow({zIndex:1, removable:true});
		function displayInfowindow(marker, data) {
			const setCenter = (data) => {
				setCenterConditionTrue();
				openLocationPopover();
				toggleModal();
				mapActions.setLatitude(data.y);
				mapActions.setLongitude(data.x);	
				mapActions.setLocation(data.place_name);
			}
			const info = Info(data, setCenter);
			infowindow.setContent(info);
			infowindow.open(kakaoMap, marker);
		}
	}, [keyword]);

	return (
		<>
			<form onSubmit={onSubmit}>
				<Input name="input" autoComplete="off" placeholder="키워드로 검색해보세요" />
			</form>
			<div>
				<MapContainer ref={map} />
			</div>
		</>
	);
};

export default Map;