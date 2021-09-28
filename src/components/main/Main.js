import React from 'react';
import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';
import Slides from './slides/Slides';
import InitiateSearch from './searching/Searching';

const Wrapper = styled(WrapperUtil)`
	@media ${(props) => props.theme.mobile} {
		height: 53%;
	}
	@media ${(props) => props.theme.tablet} {
        height: 55%;
	}
	@media ${(props) => props.theme.desktop} {
        height: 75%;
	}
`;

const SlidesWrapper = styled.div`
	margin-bottom: 0;
`;

const ButtonWrapper = styled.div`
	margin-top: 0;
`;

const TextWrapper = styled.div`
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 14px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 16px;	
	}
`;

const Main = () => {
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

export default Main;