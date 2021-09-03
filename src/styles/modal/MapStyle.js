import styled from 'styled-components';

export const Maps = styled.div`
	display: inline-block;
	@media ${(props) => props.theme.mobile} {
		width: 280px;
		height: 280px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 500px;
		height: 500px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 600px;
		height: 600px;
	}
`;