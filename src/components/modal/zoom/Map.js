import React, { useContext, useRef, useEffect } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { Maps } from '../styles/MapStyle';

/*
	::state.level로만 변화시켜줄 예정, radius는 굳이 그리지 않음::
*/

const Map = () => {
	const { state } = useContext(MapOptionContext);
	const map = useRef(null);
	
	useEffect(() => {
		const center = new window.kakao.maps.LatLng(state.latitude, state.longitude);
		const options = {
			center: center,
			level: state.level,
		};
		new window.kakao.maps.Map(map.current, options);
	}, [state]);
	
	return (
		<Maps ref={map} />
	);
};

export default Map;