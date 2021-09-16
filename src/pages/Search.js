import React from 'react';
import NavBar from '../components/common/nav/Navigation';
import Result from '../components/search/Result';
import Footer from '../components/common/footer/Footer';
import {
	Wrapper,
	NavWrapper,
	ContentsWrapper,
	FooterWrapper,
} from '../styles/Layout';

const Search = ({ location }) => {
	return (
		<Wrapper>
			<NavWrapper>
				<NavBar />
			</NavWrapper>
			<ContentsWrapper>
				<Result location={location}/>
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default Search;