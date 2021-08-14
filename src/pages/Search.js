import React from 'react';
import NavBar from '../components/common/nav/Navigation';
import Result from '../components/search/Result';
import Footer from '../components/common/footer/Footer';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../utils/Layout';

const Search = () => {
	return (
		<Wrapper>
			<NavWrapper>
				<NavBar />
			</NavWrapper>
			<ContentsWrapper>
				<Result />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default Search;