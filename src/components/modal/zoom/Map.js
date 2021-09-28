import React, { useContext, useRef, useEffect } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { MapContainer } from '../styles/MapStyle';

/*
	::state.level로만 변화시켜줄 예정, radius는 굳이 그리지 않음::
*/

const Map = () => {
	const { mapState } = useContext(MapOptionContext);
	const map = useRef(null);
	
	useEffect(() => {
		const center = new window.kakao.maps.LatLng(mapState.latitude, mapState.longitude);
		const options = {
			center: center,
			level: mapState.level,
		};
		new window.kakao.maps.Map(map.current, options);
	}, [mapState]);
	
	return (
		<MapContainer ref={map} />
	);
};

export default Map;