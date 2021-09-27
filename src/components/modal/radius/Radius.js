import React, { useContext } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Map from './Map';
import { ButtonWrapper } from '../styles/ButtonGroupStyle';
import '../styles/modal.css';

const Radius = ({ isOpen, toggle }) => {
	const { actions } = useContext(MapOptionContext);

	const radius = {
		small: 500,
		standard: 1000,
		big: 3000,
	};

	const onClickSml = () => {
		actions.setRadius(radius.small);
	};
	const onClickStd = () => {
		actions.setRadius(radius.standard);
	};
	const onClickBig = () => {
		actions.setRadius(radius.big);
	};

	return (
		<Modal isOpen={isOpen}>
			<ModalHeader toggle={toggle}>탐색 최대 반경</ModalHeader>
			<ModalBody>
				<ButtonWrapper>
					<Button outline color="primary" onClick={onClickSml}>
						좁게(500m)
					</Button>
					<Button outline color="primary" onClick={onClickStd}>
						표준(1km)
					</Button>
					<Button outline color="primary" onClick={onClickBig}>
						넓게(3km)
					</Button>
				</ButtonWrapper>
				<Map />
			</ModalBody>
		</Modal>
	);
};

export default Radius;