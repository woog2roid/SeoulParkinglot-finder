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
    	margin-top: 0%;
		margin-bottom: 1%;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 1.8%;
		margin-bottom: 1%;
    }
    @media all and (min-width:1081px) {
        margin-top: 2.5%;
		margin-bottom: 1%;
    }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">파킹랏</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">주차장 찾아보기</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="/about/">서비스 소개</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">개발자 소개</NavLink>
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