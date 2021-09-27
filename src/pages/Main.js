import React from 'react';
import Nav from '../components/common/navigation/Navigation';
import Footer from '../components/common/footer/Footer';
import MainComponent from '../components/main/MainComponent';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../styles/Layout';

const Main = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<Nav />
			</NavWrapper>
			<ContentsWrapper>
				<MainComponent />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default Main;