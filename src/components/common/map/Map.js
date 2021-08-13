import React, { useEffect, useRef } from 'react';

const Map = () => {
	const map = useRef(null);

	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
			const lat=position.coords.latitude,
				  lng=position.coords.longitude;
			const options = {
				center: new window.kakao.maps.LatLng(lat, lng),
				level: 7,
			};
				new window.kakao.maps.Map(map.current, options);
			});
		});
	}, []);
	

	return (
		<div ref={map} style={{ width: '300px', height: '300px'}}/>
	);
};

export default Map;