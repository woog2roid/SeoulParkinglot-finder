import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { ButtonWrapper } from './LevelControlStyle';
import '../../../../global_styles/bootstrap_custom/modal.css';
import Map from '../../map/Map';
import ZoomLevelContext from '../../../../contexts/ZoomLevelContext';

const LevelControl = ({ isOpen, toggle }) => {
	const { actions } = useContext(ZoomLevelContext);

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
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default LevelControl;