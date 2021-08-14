import React from 'react';
import NavBar from '../components/common/nav/Navigation';
import Footer from '../components/common/footer/Footer';
import Error from '../components/common/404/Error';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../global_styles/utils/PageLayout';

const NotFound = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<NavBar />
			</NavWrapper>
			<ContentsWrapper>
				<Error />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default NotFound;