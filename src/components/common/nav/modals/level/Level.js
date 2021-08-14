import React, { useContext } from 'react';
import MapOptionContext from '../../../../../contexts/MapOptionContext';
import Map from './Map';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { ButtonWrapper } from './Style';
import '../styles/modal.css';

const Level = ({ isOpen, toggle }) => {
	const { actions } = useContext(MapOptionContext);
	
	const onClickZoomIn = () => {
		actions.setLevel(5);
	};
	const onClickStd = () => {
		actions.setLevel(6);
	};
	const onClickZoomOut = () => {
		actions.setLevel(8);
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