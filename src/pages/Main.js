import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Slides from '../components/main/Slides';
import SearchMethod from '../components/main/SearchMethod';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../global_styles/utils/CommonComponentsLayout';

const Main = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
				<NavBar />
				<Slides />
				<SearchMethod />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default Main;