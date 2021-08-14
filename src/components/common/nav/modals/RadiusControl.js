import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import ZoomLevelContext from '../../../../contexts/ZoomLevelContext';
import '../../../../global_styles/bootstrap_custom/modal.css';

const LevelControl = ({ isOpen, toggle }) => {
	const { actions } = useContext(ZoomLevelContext);

	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>탐색 최대 반경</ModalHeader>
			<ModalBody>
				<Map/>
			</ModalBody>
		</Modal>
	);
};

export default LevelControl;