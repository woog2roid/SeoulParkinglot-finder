import React, { useState } from 'react';
import styled from 'styled-components';
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

const Wrapper = styled.div`
	@media all and (max-width:767px) {
		margin-bottom: 1%;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		margin-bottom: 1%;
    }
    @media all and (min-width:1081px) {
		margin-bottom: 1%;
    }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/seoul-parking-lot-finder">파킹랏</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">주차장 찾아보기</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="/seoul-parking-lot-finder/about/">서비스 소개</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                설정
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>위치 정보 사용 권한</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;