import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	Button,
} from 'reactstrap';
import { ButtonWrapper } from './LevelControlStyle';
import '../../../../global_styles/bootstrap_custom/modal.css';
import Map from '../../map/Map'

const LevelControl = ({ isOpen, toggle }) => {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>
				지도 축소/확대 레벨 
			</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
    				<Button outline color="primary">좁게</Button>
    				<Button outline color="primary">표준</Button>
				    <Button outline color="primary">넓게</Button>
    			</ButtonWrapper>
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default LevelControl;