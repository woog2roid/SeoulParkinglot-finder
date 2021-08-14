import React, { useState } from 'react';
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

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => setIsOpen(!isOpen);

	const [zoomModal, setZoomModal] = useState(false);
	const toggleZoomModal = () => setZoomModal(!zoomModal);

	const [radiusModal, setRadiusModal] = useState(false);
	const toggleRadiusModal = () => setRadiusModal(!radiusModal);

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
								<DropdownItem onClick={toggleZoomModal}>
									지도 축소/확대 레벨
									<Level isOpen={zoomModal}
										toggle={toggleZoomModal} />
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