import React from 'react';
import Nav from '../components/common/navigation/Navigation';
import Footer from '../components/common/footer/Footer';
import Contents from '../components/about/About';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../styles/Layout';

const About = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<Nav />
			</NavWrapper>
			<ContentsWrapper>
				<Contents />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default About;