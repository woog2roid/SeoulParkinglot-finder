import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Wrapper = styled.div`
	width: 100%;
	display: inline-block;
	text-align: center;
	@media all and (max-width:767px) {
    	margin-top: 40px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
    	margin-top: 50px;
    }
    @media all and (min-width:1081px) {
		margin-top: 60px;
    }
`;
const CircleButton = styled(Button)`
	border-radius: 50%;
	@media all and (max-width:767px) {
        width: 150px;
		height: 150px;
		line-height: 150px;
		font-size: 15px;
		& + & {
			margin-left: 20px;
		}
	}
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 200px;
		height: 200px;
		line-height: 200px;    
		font-size:23px;
		& + & {
			margin-left: 100px;
		}
	}
    @media all and (min-width:1081px) {
        width: 250px;
		height: 250px;
		line-height: 250px;
		font-size: 30px;
		& + & {
			margin-left: 200px;
		}
    }
`;

const SearchMethod = () => {
	const history = useHistory();
	
	const openQuickSearch = useCallback(
		e => {
			history.push('/seoul-parking-lot-finder/search/quick');
		}, [history]
	);
	
	const openConditionalSearch = useCallback(
		e => {
			history.push('/seoul-parking-lot-finder/search/option')
		}
	)
	
    return (
		<Wrapper>
			<CircleButton color="primary" onClick={openQuickSearch}>
					신속한 주변찾기
			</CircleButton>
			<CircleButton color="primary" onClick={openConditionalSearch}>
					꼼꼼한 조건검색
			</CircleButton>
		</Wrapper>
    );
};

export default SearchMethod;