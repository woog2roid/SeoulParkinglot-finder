import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Wrapper,
	ButtonWrapper,
	CircleButton
} from './SearchMethodButtonStyle'

const SearchMethodButton = () => {
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

export default SearchMethodButton;