import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Error404 from '../components/common/Error404';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/FooterPosition';

const NotFound = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavBar />
				<Error404 />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default NotFound;