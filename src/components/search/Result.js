import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Buttons } from './Style';

const SearchResult = () => {
	const history = useHistory();

	const goMain = (e) => {
		e.preventDefault();
		history.push('/seoul-parking-lot-finder');
	};

	return (
		<Wrapper>
			<div />
			<Buttons outline color="primary" onClick={goMain}>
				메인 페이지로 돌아가기
			</Buttons>
		</Wrapper>
	);
};

export default SearchResult;