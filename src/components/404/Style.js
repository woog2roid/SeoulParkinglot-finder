import styled from 'styled-components';
import { WrapperUtil } from '../../utils/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	height: 20%;
`;

export const Title = styled.div`
	@media all and (max-width: 767px) {
		font-size: 25px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		font-size: 30px;
	}
	@media all and (min-width: 1081px) {
		font-size: 40px;
	}
`;

export const Description = styled.div`
	@media all and (max-width: 767px) {
		font-size: 12px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		font-size: 15px;
	}
	@media all and (min-width: 1081px) {
		font-size: 20px;
	}
`;