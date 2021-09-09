import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Map from './Map';
import '../../../../../styles/modal/modal.css';

const Center = ({ isOpen, toggle, isActivated }) => {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>탐색 기준 설정</ModalHeader>
			<ModalBody>
				<Map isActivated={isActivated} toggle={toggle}/>
			</ModalBody>
		</Modal>
	);
};

export default Center;