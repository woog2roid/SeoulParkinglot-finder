import styled from 'styled-components';
import { ButtonGroup } from 'reactstrap';

export const ButtonWrapper = styled(ButtonGroup)`
	width: 100%;
	margin-bottom: 8px;
`

export const Map = styled.div`
	display: inline-block;
	@media all and (max-width: 767px) {
		width: 300px;
		height: 300px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		width: 500px;
		height: 500px;
	}
	@media all and (min-width: 1081px) {
		width: 600px;
		height: 600px;
	}
`;