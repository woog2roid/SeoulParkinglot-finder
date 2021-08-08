import styled from 'styled-components';
import { WrapperUtil } from '../../global_styles/utils/FixContentsToCenter';

export const Wrapper = styled(WrapperUtil)`
	@media all and (max-width:767px) {
		height: 45%;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        height: 55%;
    }
    @media all and (min-width:1081px) {
        height: 85%;
    }	
`

export const SlidesWrapper = styled.div`
	margin-bottom: 0;
`;

export const ButtonWrapper = styled.div`
	margin-top: 0;
`;