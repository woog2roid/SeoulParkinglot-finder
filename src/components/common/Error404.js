import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
	Wrapper,
	Title,
	Description,
} from './Error404Style'

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