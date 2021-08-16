import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';
import { Button } from 'reactstrap';

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

export const Buttons = styled(Button)`
	@media ${(props) => props.theme.mobile} {
		width: 300px;
	}
	@media ${(props) => props.theme.tablet} {
        width: 500px;
    }
	@media ${(props) => props.theme.desktop} {
        width: 600px;
	}
`;