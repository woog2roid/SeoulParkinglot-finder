import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Slides from '../components/main/Slides';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/FooterPosition';

const Main = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavBar />
				<Slides />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default Main;