import styled from 'styled-components';

export const Wrapper = styled.div`
	@media all and (max-width: 767px) {
		margin-left: 0%;
		margin-right: 0%;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		margin-left: 8%;
		margin-right: 8%;
	}
	@media all and (min-width: 1081px) {
		margin-left: 15%;
		margin-right: 15%;
	}
`;