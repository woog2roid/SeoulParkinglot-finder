import React from 'react';
import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';

const Wrapper = styled(WrapperUtil)`
	height: 28%;
	text-align: left;
	@media ${(props) => props.theme.mobile} {
	    width: 85%;
	}
	@media ${(props) => props.theme.tablet} {
		width: 70%;
	}
	@media ${(props) => props.theme.desktop} {
    	width: 70%;
	}
`;

const Intro = styled.div`
	font-weight: bold;	
	${(props) => props.theme.m}
	@media ${(props) => props.theme.mobile} {
		line-height: 17px;
	}
	@media ${(props) => props.theme.tablet} {
		line-height: 21px;
	}
	@media ${(props) => props.theme.desktop} {
		line-height: 25px;
	}
`;

const Main = styled.h1`
	font-weight: bold;
	${(props) => props.theme.xxl}
	@media ${(props) => props.theme.mobile} {
		margin-bottom: 3px;
	}
	@media ${(props) => props.theme.tablet} {
		margin-bottom: 5px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-bottom: 6px;
	}
`;

const Comain = styled.div`
	${(props) => props.theme.l}
	@media ${(props) => props.theme.mobile} {
		line-height: 17px;
	}
	@media ${(props) => props.theme.tablet} {
		line-height: 21px;
	}
	@media ${(props) => props.theme.desktop} {
		line-height: 25px;
	}
`;

const Description = styled.div`
	font-weight: lighter;
	${(props) => props.theme.xs}
	@media ${(props) => props.theme.mobile} {
		line-height: 13px;
	}
	@media ${(props) => props.theme.tablet} {
		line-height: 17px;
	}
	@media ${(props) => props.theme.desktop} {
		line-height: 21px;
	}
`;

const About = () => {
    return (
		<Wrapper>
			<Intro>서울시 공영주차장을 빠르게 찾아주는 서비스:</Intro>
			<Main>파킹랏</Main>
			<Comain className="text-primary">
				신속한 주변찾기부터 꼼꼼한 조건검색까지,<br />
				상황에 따라 알맞게 사용할 수 있도록<br />
				필요한 기능을 구성했습니다.
			</Comain>
			<hr className="my-1" />
			<Description className="text-muted">
				서울시에서 제공하는 공공 데이터 API
				(http://data.seoul.go.kr/)를 통해
				데이터를 받아오기에
				주기적으로 갱신되는, 신뢰할 수 있는
				데이터들로만 구성되어있습니다.
			</Description>
		</Wrapper>
    );
};

export default About;