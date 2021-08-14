import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Map from '../common/map/Map';
import { Wrapper, Buttons } from './SearchResultStyle';

const SearchResult = () => {
	const history = useHistory();

	const goMain = useCallback(
		(e) => {
			e.preventDefault();
			history.push('/seoul-parking-lot-finder');
		},
		[history]
	);
	
	return (
		<Wrapper>
			
			<Map />
			<div />
			<Buttons outline color="primary" onClick={goMain}>
				메인 페이지로 돌아가기
			</Buttons>
		</Wrapper>
	);
};

export default SearchResult;