import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/FooterPosition';

const NotFound = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavBar />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default NotFound;