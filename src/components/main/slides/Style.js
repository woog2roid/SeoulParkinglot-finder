import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
	margin: 0px auto;
	@media all and (max-width:767px) {
        width: 80%;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 90%;
    }
    @media all and (min-width:1081px) {
		width: 55%;
    }
`;
