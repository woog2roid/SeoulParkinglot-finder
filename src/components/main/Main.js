import React from 'react';
import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';
import Slides from './slides/Slides';
import Search from './search/Search';

const Wrapper = styled(WrapperUtil)`
	@media ${(props) => props.theme.mobile} {
		height: 53%;
	}
	@media ${(props) => props.theme.tablet} {
        height: 55%;
	}
	@media ${(props) => props.theme.desktop} {
        height: 80%;
	}
`;

const SlidesWrapper = styled.div`
	margin-bottom: -2%;
`;

const SearchWrapper = styled.div`
	margin-top: -2%;
`;

const Text = styled.div`
	margin-top: -1.5%;
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
			<SearchWrapper>
				<Search />
				<Text>
					⁕위치 정보 권한은 사용자 주변의 주차장을 찾기 위해 필요합니다.
				</Text>
			</SearchWrapper>
		</Wrapper>
	);
};

export default Main;