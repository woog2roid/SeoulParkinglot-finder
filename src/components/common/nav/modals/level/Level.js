import React, { useContext } from 'react';
import MapOptionContext from '../../../../../contexts/MapOptionContext';
import Map from './Map';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { ButtonWrapper } from '../styles/ButtonGroupStyle';
import '../styles/modal.css';

const Level = ({ isOpen, toggle }) => {
	const { actions } = useContext(MapOptionContext);

	const level = {
		zoomIn: 5,
		standard: 6,
		zoomOut: 8,
	};

	const onClickZoomIn = () => {
		actions.setLevel(level.zoomIn);
	};
	const onClickStd = () => {
		actions.setLevel(level.standard);
	};
	const onClickZoomOut = () => {
		actions.setLevel(level.zoomOut);
	};

	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>지도 축소/확대 레벨</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
					<Button outline color="primary" onClick={onClickZoomIn}>
						축소
					</Button>
					<Button outline color="primary" onClick={onClickStd}>
						표준
					</Button>
					<Button outline color="primary" onClick={onClickZoomOut}>
						확대
					</Button>
				</ButtonWrapper>
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default Level;