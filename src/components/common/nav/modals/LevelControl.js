import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
} from 'reactstrap';
import '../../../../global_styles/bootstrap_custom/modal.css';
import Map from '../../map/Map'

const LevelControl = ({ isOpen, toggle }) => {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>
				지도 축소/확대 레벨
			</ModalHeader>
			<ModalBody>
				vfdavafd
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default LevelControl;