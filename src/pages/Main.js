import React from 'react';
import Nav from '../components/common/navigation/Navigation';
import Footer from '../components/common/footer/Footer';
import Contents from '../components/main/Main';
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
				<Contents />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default Main;