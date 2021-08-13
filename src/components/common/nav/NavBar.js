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
import LevelControlModal from './modals/LevelControl';
import { Wrapper } from './NavBarStyle';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => setIsOpen(!isOpen);

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	return (
		<Wrapper>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/seoul-parking-lot-finder">파킹랏</NavbarBrand>
				<NavbarToggler onClick={toggleNav} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/seoul-parking-lot-finder/about/">서비스 소개</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								설정
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem onClick={toggleModal}>
									지도 축소/확대 레벨
									<LevelControlModal isOpen={modal} toggle={toggleModal} />
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</Wrapper>
	);
};

export default NavBar;