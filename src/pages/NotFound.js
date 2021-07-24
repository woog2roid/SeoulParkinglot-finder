import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Error404 from '../components/common/Error404';
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

const NotFound = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavStackIndex>
					<NavBar />
				</NavStackIndex>
				<ContentStackIndex>
					<Error404 />
				</ContentStackIndex>
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default NotFound;