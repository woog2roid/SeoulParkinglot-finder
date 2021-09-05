import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../../../../contexts/MapOptionContext';
import { Maps } from '../../../../../styles/modal/MapStyle';

const Map = () => {
	const { state } = useContext(ZoomLevelContext);
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