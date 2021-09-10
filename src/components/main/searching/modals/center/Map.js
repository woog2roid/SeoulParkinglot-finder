import React, { useContext, useRef, useEffect, useState } from 'react';
import ZoomLevelContext from '../../../../../contexts/MapOptionContext';
import { Maps } from '../../../../../styles/modal/MapStyle';
import { Input, Wrapper } from './Style';
import Info from './Info';

const Map = ({ isActivated, toggle }) => {
	const { state, actions } = useContext(ZoomLevelContext);
	const map = useRef(null);

	const [keyword, setKeyword] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		setKeyword(e.target.input.value);
	};

	//useEffect:
	//맵을 생성하고,
	//결과값(keyword)이 변할때마다 그에 맞춰서 리렌더링을 해주어야함
	useEffect(() => {
		window.kakao.maps.load(() => {
			//geolocation으로 현재 위치 받아서 kakao Map 객체 생성
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;
				const center = new window.kakao.maps.LatLng(lat, lng);
				const options = {
					center: center,
					level: state.level,
				};
				const kakaoMap = new window.kakao.maps.Map(map.current, options);

				//submit을 통해 받은 keyword로 검색
				const placeSearch = new window.kakao.maps.services.Places();
				placeSearch.keywordSearch(keyword, placesSearchCB);

				//keywordSearch의 callback으로
				//1.marker를 표시하고,
				//2.Map의 bound를 설정하며,
				//3.marker를 클릭했을 때의 event를 모두 관리
				function placesSearchCB(data, status, pagination) {
					console.log(status);
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
					infowindow.close();
					//react Hook을 사용하기 위해 Button의 onClick은 여기서 마무리 짓는다.
					let info = Info(data, isActivated, toggle);
					info.getElementsByTagName("button")[0].onclick = function () {
						isActivated();
						toggle();
						actions.setLatitude(data.y);
						actions.setLongitude(data.x);	
					}
					
					infowindow.setContent(info);
					infowindow.open(kakaoMap, marker);
				}
			});
		});
	}, [keyword]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<Input name="input" autoComplete="off" placeholder="키워드로 검색해보세요" />
			</form>
			<Wrapper>
				<Maps ref={map} />
			</Wrapper>
		</div>
	);
};

export default Map;