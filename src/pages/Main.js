import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Slides from '../components/main/Slides';

const Main = () => {
    return (
        <>
			<NavBar />
			<Slides />
			<Footer />
        </>
    );
};

export default Main;