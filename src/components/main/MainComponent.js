import React from 'react';
import Slides from './Slides';
import SearchMethodButton from './SearchMethodButton';
import { Wrapper,
		SlidesWrapper,
		ButtonWrapper
	   } from './MainComponentStyle';

const MainComponent = () => {
	return (
		<Wrapper>
			<SlidesWrapper>
				<Slides />
			</SlidesWrapper>
			<ButtonWrapper>
				<SearchMethodButton />
			</ButtonWrapper>
		</Wrapper>
	)
}

export default MainComponent;