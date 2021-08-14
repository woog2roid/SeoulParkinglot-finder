import styled from 'styled-components';
import { WrapperUtil } from '../../utils/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	@media all and (max-width:767px) {
		height: 53%;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        height: 55%;
    }
    @media all and (min-width:1081px) {
        height: 75%;
    }	
`

export const SlidesWrapper = styled.div`
	margin-bottom: 0;
`;

export const ButtonWrapper = styled.div`
	margin-top: 0;
`;

export const TextWrapper = styled.div`
	@media all and (max-width:767px) {
		font-size: 10px;
    }
`;