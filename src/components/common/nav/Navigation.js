import React, { useState, useContext } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import Level from './modals/level/Level';
import Radius from './modals/radius/Radius';
import { Wrapper } from './Style';
import MapOptionContext from '../../../contexts/MapOptionContext';

const Navigation = () => {
	const { state } = useContext(MapOptionContext) 
	
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => setIsOpen(!isOpen);

	//toggleButton을 눌러 Modal이 닫힐 때, localStorage와 연동
	const [levelModal, setLevelModal] = useState(false);
	const toggleLevelModal = () => {
		if(levelModal) localStorage.setItem('level', state.level);
		setLevelModal(!levelModal);
	};

	const [radiusModal, setRadiusModal] = useState(false);
	const toggleRadiusModal = () => {
		if(radiusModal) localStorage.setItem('radius', state.radius);
		setRadiusModal(!radiusModal);
	};
	
	return (
		<Wrapper>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/seoul-parking-lot-finder">파킹랏</NavbarBrand>
				<NavbarToggler onClick={toggleNav} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/seoul-parking-lot-finder/about/">
								서비스 소개
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								설정
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem onClick={toggleLevelModal}>
									지도 축소/확대 레벨
									<Level isOpen={levelModal}
										toggle={toggleLevelModal} />
								</DropdownItem>
								<DropdownItem onClick={toggleRadiusModal}>
									탐색 최대 반경
									<Radius isOpen={radiusModal}
										toggle={toggleRadiusModal} />
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</Wrapper>
	);
};

export default Navigation;