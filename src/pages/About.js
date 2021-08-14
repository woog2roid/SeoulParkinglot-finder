import React from 'react';
import NavBar from '../components/common/nav/Navigation';
import Footer from '../components/common/footer/Footer';
import Explanation from '../components/about/Explanation';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../utils/Layout';

const About = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<NavBar />
			</NavWrapper>
			<ContentsWrapper>
				<Explanation />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default About;