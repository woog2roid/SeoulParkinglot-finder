import React from 'react';
import Slides from './slides/Slides';
import InitiateSearch from './searching/Searching';
import { Wrapper, SlidesWrapper, ButtonWrapper, TextWrapper } from './Style';

const MainComponent = () => {
	return (
		<Wrapper>
			<SlidesWrapper>
				<Slides />
			</SlidesWrapper>
			<ButtonWrapper>
				<InitiateSearch />
			</ButtonWrapper>
			<TextWrapper>
				⁕위치 정보 권한은 사용자 주변의 주차장을 찾기 위해 필요합니다.
			</TextWrapper>
		</Wrapper>
	);
};

export default MainComponent;