import React from 'react';
import styled from 'styled-components';
import Slides from './slides/Slides';
import Search from './search/Search';

const Wrapper = styled.div`
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		margin-top: calc((100vh - 60px - 53vh) / 2);
		margin-bottom: calc((100vh - 60px - 53vh) / 2);
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: calc((100vh - 60px - 55vh) / 2);
		margin-bottom: calc((100vh - 60px - 55vh) / 2);
	}
	@media ${(props) => props.theme.desktop} {
        margin-top: calc((100vh - 60px - 80vh) / 2);
		margin-bottom: calc((100vh - 60px - 80vh) / 2);
	}
`;

const SlidesWrapper = styled.div`
	margin-bottom: 0%;
`;

const SearchWrapper = styled.div`
	margin-top: 0%;
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