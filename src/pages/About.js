import React from 'react';
import NavBar from '../components/common/nav/NavBar';
import Footer from '../components/common/footer/Footer';
import About from '../components/about/About';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../global_styles/utils/PageLayout';

const AboutService = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<NavBar />
			</NavWrapper>
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