import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import MainComponent from '../components/main/MainComponent';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../global_styles/utils/PageLayout';

const Main = () => {
    return (
        <Wrapper>
			<NavBar />
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