import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Main, Line, Buttons, Description } from './Style';
import Map from './Map';

const SearchResult = () => {
	const history = useHistory();

	const goMain = (e) => {
		e.preventDefault();
		history.push('/seoul-parking-lot-finder');
	};

	return (
		<Wrapper>
			<Line className="my-2" />
			<Main>
				검색결과
			</Main>
			<Line className="my-2" />
			<Map />
			<div />
			<Buttons outline color="primary" onClick={goMain}>
				메인 페이지로 돌아가기
			</Buttons>
			<div />
			<Description>
				⁕탐색 반경 및 지도의 줌 설정은
				상단의 설정 탭에서 조정할 수 있습니다.
			</Description>
		</Wrapper>
	);
};

export default SearchResult;