import React, { useContext } from 'react';
import MapOptionContext from '../../../../../contexts/MapOptionContext';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Map from './Map';
import { ButtonWrapper } from '../styles/ButtonGroupStyle';
import '../styles/modal.css';

const Radius = ({ isOpen, toggle }) => {
	const { actions } = useContext(MapOptionContext);

	const onClickSml = () => {
		actions.setRadius(5000);
	};
	const onClickStd = () => {
		actions.setRadius(8000);
	};
	const onClickBig = () => {
		actions.setRadius(10000);
	};
	
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>탐색 최대 반경</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
					<Button outline color="primary" onClick={onClickSml}>
						좁게(5km)
					</Button>
					<Button outline color="primary" onClick={onClickStd}>
						표준(8km)
					</Button>
					<Button outline color="primary" onClick={onClickBig}>
						넓게(10km)
					</Button>
				</ButtonWrapper>
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default Radius;