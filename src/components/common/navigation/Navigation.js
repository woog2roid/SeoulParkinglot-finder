import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MapOptionContext from '../../../contexts/MapOptionContext';
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
import Zoom from '../../modal/zoom/Zoom';
import Radius from '../../modal/radius/Radius';

const Wrapper = styled.div`
	position: relative;
	@media ${(props) => props.theme.mobile} {
		margin-bottom: 1%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-bottom: 1%;
	}
	@media ${(props) => props.theme.desktop} {
		margin-bottom: 1%;
	}
`;

const Navigation = () => {
	const { state } = useContext(MapOptionContext);

	const [isCollapseOpen, setIsCollapseOpen] = useState(false);
	const toggleHamburger = () => setIsCollapseOpen(!isCollapseOpen);

	//toggleButton을 눌러 Modal이 닫힐 때, localStorage와 연동
	const [isZoomOpen, setIsZoomOpen] = useState(false);
	const toggleZoom = () => {
		if (isZoomOpen) localStorage.setItem('level', state.level);
		setIsZoomOpen(!isZoomOpen);
	};

	const [isRadiusOpen, setIsRadiusOpen] = useState(false);
	const toggleRadius = () => {
		if (isRadiusOpen) localStorage.setItem('radius', state.radius);
		setIsRadiusOpen(!isRadiusOpen);
	};

	return (
		<Wrapper>
			<Navbar color="light" light expand="md">
				<NavbarBrand tag={Link} to="/seoul-parking-lot-finder">
					파킹랏
				</NavbarBrand>
				<NavbarToggler onClick={toggleHamburger} />
				<Collapse isOpen={isCollapseOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/seoul-parking-lot-finder/about/">
								서비스 소개
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								설정
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem onClick={toggleZoom}>
									지도 축소/확대 레벨
									<Zoom isOpen={isZoomOpen} toggle={toggleZoom} />
								</DropdownItem>
								<DropdownItem onClick={toggleRadius}>
									탐색 최대 반경
									<Radius isOpen={isRadiusOpen} toggle={toggleRadius} />
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