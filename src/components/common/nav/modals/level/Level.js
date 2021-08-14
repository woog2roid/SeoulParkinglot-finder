import React, { useContext, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Map } from '../../../../../global_styles/MapStyle'
import ZoomLevelContext from '../../../../../contexts/ZoomLevelContext';
import { ButtonWrapper } from './Style';
import '../modal.css';

const Level = ({ isOpen, toggle }) => {
	const { state, actions } = useContext(ZoomLevelContext);

	const map = useRef(null);
	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;
				//37.5,127: seoul
				const options = {
					center: new window.kakao.maps.LatLng(lat, lng),
					level: state.level,
				};
				new window.kakao.maps.Map(map.current, options);
			});
		});
	}, [state]);

	const onClickSml = () => {
		actions.setLevel(5);
	};
	const onClickStd = () => {
		actions.setLevel(6);
	};
	const onClickBig = () => {
		actions.setLevel(8);
	};

	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>지도 축소/확대 레벨</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
					<Button outline color="primary" onClick={onClickSml}>
						좁게
					</Button>
					<Button outline color="primary" onClick={onClickStd}>
						표준
					</Button>
					<Button outline color="primary" onClick={onClickBig}>
						넓게
					</Button>
				</ButtonWrapper>
				<Map ref={map} />
			</ModalBody>
		</Modal>
	);
};

export default Level;