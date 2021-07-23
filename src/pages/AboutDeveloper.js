import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/CommonComponentsLayout';

const AboutDeveloper = () => {
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

export default AboutDeveloper;