import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const Wrapper = styled.div`
	text-align: center;
	margin-top: calc((100vh - 60px - 28vh) / 2);
`;

const Title = styled.div`
	${(props) => props.theme.xxl}
`;

const Description = styled.div`
	${(props) => props.theme.m}
`;

const Error = () => {
	const history = useHistory();
	const goBack = (e) => {
		e.preventDefault();
		history.goBack();
	};

	return (
		<Wrapper>
			<Title>존재하지 않는 페이지 입니다.</Title>
			<Description>페이지 URL을 다시 확인해주십시오.</Description>
			<Button outline color="primary" onClick={goBack}>
				이전 페이지로 돌아가기
			</Button>
		</Wrapper>
	);
};

export default Error;