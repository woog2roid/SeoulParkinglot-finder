import React from 'react';
import Slides from './Slides';
import SearchMethodButton from './SearchMethodButton';
import { Wrapper,
		SlidesWrapper,
		ButtonWrapper,
		TextWrapper
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
			<TextWrapper>
				⁕위치 정보 권한은 사용자 주변의 주차장을 찾기 위해 필요합니다.
			</TextWrapper>
		</Wrapper>
	)
}

export default MainComponent;