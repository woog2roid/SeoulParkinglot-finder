import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Slides from '../components/main/Slides';
import SearchMethodButton from '../components/main/SearchMethodButton';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../global_styles/utils/CommonComponentsLayout';

const Main = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavBar />
				<Slides />
				<SearchMethodButton />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default Main;