import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
	font-weight: light;
`;
const Profile = styled.div`
    padding: 5px;
    text-align: center;
	@media all and (max-width:767px) {
        font-size: 13px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 15px;
    }
    @media all and (min-width:1081px) {
        font-size: 18px;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Profile>
                © 2021 woog2roid. All rights reserved.
            </Profile>
        </Wrapper>
    );
};
export default Footer;