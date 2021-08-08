import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import About from '../components/about/About';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../global_styles/utils/PageLayout';

const AboutService = () => {
    return (
        <Wrapper>
			<NavBar />
			<ContentsWrapper>
				<About />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default AboutService;