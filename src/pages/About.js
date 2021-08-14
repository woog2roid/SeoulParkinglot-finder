import React from 'react';
import NavBar from '../components/common/nav/NavBar';
import Footer from '../components/common/footer/Footer';
import Explanation from '../components/about/Explanation';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../global_styles/utils/PageLayout';

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