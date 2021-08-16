import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
	margin: 0px auto;
    width: 80%;
	@media ${(props) => props.theme.tablet} {
        width: 90%;
	}
	@media ${(props) => props.theme.desktop} {
		width: 55%;
	}
`;
