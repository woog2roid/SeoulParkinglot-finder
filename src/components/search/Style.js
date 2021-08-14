import styled from 'styled-components';
import { WrapperUtil } from '../../utils/FixedContents';
import { Button } from 'reactstrap';

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
`;

export const Buttons = styled(Button)`
	@media all and (max-width:767px) {
		width: 300px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 500px;
    }
    @media all and (min-width:1081px) {
        width: 600px;
    }
`;