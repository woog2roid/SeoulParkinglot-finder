import React from 'react';
import styled from 'styled-components';
import { WrapperUtil } from '../../styles/utils/FixContentsToCenter';

const Wrapper = styled(WrapperUtil)`
	height: 28%;
	text-align: left;
	@media all and (max-width:767px) {
    	width: 85%;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		width: 70%;
    }
    @media all and (min-width:1081px) {
    	width: 70%;
	}	
`

const Intro = styled.h1`
	font-weight: bold;	
	@media all and (max-width:767px) {
    	font-size: 12px;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 15px;
    }
    @media all and (min-width:1081px) {
    	font-size: 20px;
	}
	margin-bottom: 0px;
`;
const Main = styled.h1`
	font-weight: bold;
	@media all and (max-width:767px) {
    	font-size: 25px;  
		margin-bottom: 3px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 30px;
		margin-bottom: 5px;
    }
    @media all and (min-width:1081px) {
    	font-size: 40px;
		margin-bottom: 6px;
	}
`;
const Comain = styled.div`
	@media all and (max-width:767px) {
    	font-size: 14px;
		line-height: 17px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 18px;
		line-height: 21px;
    }
    @media all and (min-width:1081px) {
    	font-size: 22px;
		line-height: 25px;
	}
`;
const Description = styled.div`
	font-weight: lighter;
	@media all and (max-width:767px) {
    	font-size: 8px;
		line-height: 11px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 12px;
		line-height: 15px;
    }
    @media all and (min-width:1081px) {
    	font-size: 16px;
		line-height: 19px;
	}
`;

const Service = () => {
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

export default Service;