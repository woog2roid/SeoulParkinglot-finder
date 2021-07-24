import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Service from '../components/about/Service';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/CommonComponentsLayout';
import styled from 'styled-components';

const NavStackIndex = styled.div`
	position: relative;
	z-index: 100;
`;
const ContentStackIndex = styled.div`
	position: relative
	z-index: 1;
`;

const AboutService = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavStackIndex>
					<NavBar />
				</NavStackIndex>
				<ContentStackIndex>
					<Service />
				</ContentStackIndex>
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default AboutService;