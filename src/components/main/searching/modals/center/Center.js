import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Map from './Map';
import '../../../../../styles/modal/modal.css';

const Center = ({ isOpen, toggleModal, toggleLocation, isActivated }) => {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggleModal}>탐색 기준 설정</ModalHeader>
			<ModalBody>
				<Map isActivated={isActivated} toggleModal={toggleModal}
					toggleLocation={toggleLocation}/>
			</ModalBody>
		</Modal>
	);
};

export default Center;