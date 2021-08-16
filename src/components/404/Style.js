import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	height: 20%;
`;

export const Title = styled.div`
	@media ${(props) => props.theme.mobile} {
		font-size: 25px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 30px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 40px;
	}
`;

export const Description = styled.div`
	@media ${(props) => props.theme.mobile} {
		font-size: 12px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 20px;
	}
`;