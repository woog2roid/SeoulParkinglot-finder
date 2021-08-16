import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	@media ${(props) => props.theme.mobile} {
		margin-bottom: 1%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-bottom: 1%;
	}
	@media ${(props) => props.theme.desktop} {
		margin-bottom: 1%;
	}
`;