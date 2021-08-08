import React from 'react';
import {
	Wrapper,
	Intro,
	Main,
	Comain,
	Description
} from './AboutStyle'

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