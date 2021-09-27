import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
	padding: 5px;
	text-align: center;
	${(props) => props.theme.xs}
`;

const Footer = () => {
	return <Profile>© 2021 woog2roid. All rights reserved.</Profile>;
};

export default Footer;