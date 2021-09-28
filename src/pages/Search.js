import React from 'react';
import Nav from '../components/common/navigation/Navigation';
import Footer from '../components/common/footer/Footer';
import Contents from '../components/search/Search';
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
				<Nav />
			</NavWrapper>
			<ContentsWrapper>
				<Contents location={location}/>
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	);
};

export default Search;