import styled from 'styled-components';

export const Profile = styled.div`
	padding: 5px;
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 13px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 15px;
	}
`;