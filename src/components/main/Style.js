import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	@media ${(props) => props.theme.mobile} {
		height: 53%;
	}
	@media ${(props) => props.theme.tablet} {
        height: 55%;
	}
	@media ${(props) => props.theme.desktop} {
        height: 75%;
	}
`;

export const SlidesWrapper = styled.div`
	margin-bottom: 0;
`;

export const ButtonWrapper = styled.div`
	margin-top: 0;
`;

export const TextWrapper = styled.div`
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 14px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 16px;	
	}
`;