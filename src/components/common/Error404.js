import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Wrapper = styled.div`
	text-align: center;
	position: absolute;
	height: 20%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`;
const Title = styled.div`
	@media all and (max-width:767px) {
    	font-size: 25px;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 30px;
    }
    @media all and (min-width:1081px) {
    	font-size: 40px;
	}
`;
const Description = styled.div`
	@media all and (max-width:767px) {
    	font-size: 12px;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 15px;
    }
    @media all and (min-width:1081px) {
    	font-size: 20px;
	}
`;

const Error404 = () => {
	const history = useHistory();
	
	const goBack = useCallback(
		e => {
			history.goBack();
		}, [history]
	);
	
	return (
		<Wrapper>
			<Title>존재하지 않는 페이지 입니다.</Title>
			<Description>
				페이지 URL을 다시 확인해주십시오.
			</Description>
			<Button outline color="primary" onClick={goBack}>
				이전 페이지로 돌아가기
			</Button>	
		</Wrapper>
	);
};

export default Error404;