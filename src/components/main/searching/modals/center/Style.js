import styled from 'styled-components';

export const Input = styled.input`
	border: 2px solid ${(props) => props.theme.primary};

	@media ${(props) => props.theme.mobile} {
		width: 280px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 500px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 600px;
		margin-bottom: 10px;
	}

	&:focus {
		outline: none;
	}
`;

export const Wrapper = styled.div`
`;