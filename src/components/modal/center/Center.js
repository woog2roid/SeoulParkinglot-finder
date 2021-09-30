import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Map from './Map';
import '../styles/modal.css';

const Center = ({ isOpen, toggleModal, openLocationPopover, setCenterConditionTrue }) => {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggleModal}>탐색 기준 설정</ModalHeader>
			<ModalBody>
				<Map
					setCenterConditionTrue={setCenterConditionTrue}
					openLocationPopover={openLocationPopover}
					toggleModal={toggleModal}
				/>
			</ModalBody>
		</Modal>
	);
};

export default Center;