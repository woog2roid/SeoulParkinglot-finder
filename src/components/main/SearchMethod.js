import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Wrapper = styled.div`
	@media all and (max-width:767px) {
    	margin-top: 20px;
		margin-bottom: 15px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
    	margin-top: 30px;
		margin-bottom: 20px;
    }
    @media all and (min-width:1081px) {
		margin-top: 40px;
		margin-bottom: 25px;
    }
`;
const ButtonWrapper = styled.div`
	width: 100%;
	display: inline-block;
	text-align: center;
`;
const CircleButton = styled(Button)`
	border-radius: 50%;
	@media all and (max-width:767px) {
        width: 130px;
		height: 130px;
		line-height: 110px;
		font-size: 13px;
		& + & {
			margin-left: 20px;
		}
	}
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 200px;
		height: 200px;
		line-height: 180px;    
		font-size:18px;
		& + & {
			margin-left: 100px;
		}
	}
    @media all and (min-width:1081px) {
        width: 250px;
		height: 250px;
		line-height: 230px;
		font-size: 25px;
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
	
	const openAdvancedSearch = useCallback(
		e => {
			history.push('/seoul-parking-lot-finder/search/advanced')
		}, [history]
	);
	
    return (
		<Wrapper>
			<ButtonWrapper>
				<CircleButton outline color="primary" onClick={openQuickSearch}>
						신속한 주변찾기
				</CircleButton>
				<CircleButton outline color="primary" onClick={openAdvancedSearch}>
						꼼꼼한 고급검색
				</CircleButton>
			</ButtonWrapper>
		</Wrapper>
    );
};

export default SearchMethod;