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
import { Wrapper } from './NavBarStyle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onClick = () => {
	  setIsOpen(!isOpen);
	  
  };

  return (
    <Wrapper>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/seoul-parking-lot-finder">파킹랏</NavbarBrand>
        <NavbarToggler onClick={onClick} />
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