import React, { useContext } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import Map from './Map';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { ButtonWrapper } from '../styles/ButtonGroupStyle';
import '../styles/modal.css';

const Zoom = ({ isOpen, toggle }) => {
	const { mapActions } = useContext(MapOptionContext);

	const level = {
		zoomIn: 4,
		standard: 5,
		zoomOut: 6,
	};

	const onClickZoomIn = () => {
		mapActions.setLevel(level.zoomIn);
	};
	const onClickStd = () => {
		mapActions.setLevel(level.standard);
	};
	const onClickZoomOut = () => {
		mapActions.setLevel(level.zoomOut);
	};

	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>지도 축소/확대 레벨</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
					<Button outline color="primary" onClick={onClickZoomIn}>
						확대
					</Button>
					<Button outline color="primary" onClick={onClickStd}>
						표준
					</Button>
					<Button outline color="primary" onClick={onClickZoomOut}>
						축소
					</Button>
				</ButtonWrapper>
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default Zoom;